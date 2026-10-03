import { createContext, useEffect, useState } from "react";
import SendGetAnswer from "../gemini_start";

export const ChatContext = createContext();

const ContextProvider = (props) => {
  // sideBar
  const [expandedSideBar, setExpandedSideBar] = useState(
    window.innerWidth > 1120,
  );
  // chat
  const [prompt, setPrompt] = useState("");
  const [openedChat, setOpenedChat] = useState(false);
  // console.log(JSON.parse(localStorage.getItem("chatHistory")))
  const [chatHistory, setChatHistory] = useState(() => {
    // { ...c, chat: [...c.chat, { role: "ai",id: lastId, text: response }] }
    try {
      const saved = localStorage.getItem("chatHistory");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });
  const [lastId, setLastId] = useState(null);
  const [chatId, setChatId] = useState(Date.now());
  const [loading, setLoading] = useState(false);
  const [chatName, setChatName] = useState("");
  // dark mode
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("isDark");
    if (saved) return JSON.parse(saved);
    return window.matchMedia(" (prefers-color-scheme: dark) ").matches;
  });
  // model Control
  const [model, setModel] = useState(() => {
    const saved = localStorage.getItem("model");
    if (saved) return JSON.parse(saved);
    return "gemini-3.5-flash-lite";
  });
  // type: normal danger warning
  const [msgPopUpOp, setMsgPopUpOP] = useState({
    isOpen: false,
    msgText: "",
    type: "normal",
    btnAction: "Ok",
    funAction: "",
  });
  const [msgPopUpInput, setMsgPopUpInput] = useState({
    isOpen: false,
    startValue: '',
    msgText: "",
    btnAction: "Ok",
    funAction: "",
  });
  const [personalizedAnswer, setPersonalizedAnswer] = useState(() => {
    const saved = localStorage.getItem("personalizedAnswer");
    if (saved) return JSON.parse(saved);
    return "";
  });

  // local storage
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  useEffect(() => {
    localStorage.setItem("model", JSON.stringify(model));
  }, [model]);
  useEffect(() => {
    localStorage.setItem(
      "personalizedAnswer",
      JSON.stringify(personalizedAnswer),
    );
  }, [personalizedAnswer]);

  // functions
  // on Sent
  const onSent = async () => {
    let text = prompt.trim();
    const currentId = chatId;
    let answer, aiMsg;
    let interactionId = null;
    let lastInteractionId;
    if (text === "") return;

    setPrompt("");
    setOpenedChat(true);

    setChatHistory((prev) => {
      const existingChat = prev.find((c) => c.chatID === currentId);
      if (existingChat) {
        return prev.map((c) =>
          c.chatID === currentId
            ? { ...c, chat: [...c.chat, { role: "user", text }] }
            : c,
        );
      } else {
        const newChatName = text.substring(0, 15);
        return [
          {
            chatID: currentId,
            chatName: chatName || newChatName,
            chat: [{ role: "user", text }],
          },
          ...prev,
        ];
      }
    });

    // console.log(text);
    // console.log(chatHistory);
    try {
      setLoading(true);
      let response;
      // const response = { interactionId: "", aiMsg: "eee" };
      if (personalizedAnswer !== "") {
        const persText =
          text +
          " personalize the answer with this, and do not mention it in the answer " +
          personalizedAnswer;
        response = await SendGetAnswer(
          persText,
          model,
          GetlastInteractionId(currentId),
        );
      } else {
        response = await SendGetAnswer(
          text,
          model,
          GetlastInteractionId(currentId),
        );
      }

      //  warp with () because variables already declared
      ({ interactionId, aiMsg } = response);
    } catch (error) {
      // return from function will be error
      aiMsg = error;
    } finally {
      setLoading(false);
    }
    setChatHistory((prev) =>
      prev.map((c) =>
        c.chatID === currentId
          ? {
              ...c,
              chat: [...c.chat, { role: "ai", id: interactionId, text: aiMsg }],
            }
          : c,
      ),
    );
  };

  function GetlastInteractionId(currentId) {
    let currentChat = chatHistory.filter((c) => c.chatID === currentId)[0];
    if (currentChat === undefined) return null;
    // first approach to reverse
    // currentChat = currentChat.chat;
    // let rev = [...currentChat].toReversed();

    // second approach
    let revCurrentChat = currentChat.chat.toReversed();
    let lastId = revCurrentChat.find((msg) => msg.id);
    if (lastId === undefined) return null;
    lastId = lastId.id;

    return lastId !== undefined ? lastId : null;
  }

  function openNewChat() {
    setChatId(Date.now());
    setOpenedChat(false);
  }
  function selectChat(id) {
    setChatId(id);
    setOpenedChat(true);
  }
  function deleteChat(id) {
    setChatHistory((h) => {
      return h.filter((c) => c.chatID !== id);
    });
  }

  const contextValue = {
    expandedSideBar,
    setExpandedSideBar,
    setIsDark,
    openedChat,
    setOpenedChat,
    onSent,
    setPrompt,
    prompt,
    chatHistory,
    setChatHistory,
    chatId,
    setChatId,
    openNewChat,
    selectChat,
    model,
    setModel,
    msgPopUpOp,
    setMsgPopUpOP,
    deleteChat,
    setPersonalizedAnswer,
    personalizedAnswer,
    msgPopUpInput,
    setMsgPopUpInput,
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ContextProvider;
