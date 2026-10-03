import { useContext, useEffect, useRef, useState } from "react";
import "./chat.css";
import {
  Plus,
  Microphone,
  Maximize,
  Minimize,
  Fullscreen,
  CopySuccess,
  Copy3,
  Copy,
  Restart,
  Sidebar2,
  History,
} from "reicon-react";
import { ChatContext } from "../../context/context";
import MarkdownRenderer from "./MarkdownRenderer";
import PopUpMenu from "../popUpMenu/popUpMenu";
import ModelControl from "../modelControl/modelControl";

export default function Chat() {
  const {
    setExpandedSideBar,
    openedChat,
    onSent,
    setPrompt,
    prompt,
    chatHistory,
    chatId,
  } = useContext(ChatContext);
  const welcomeMessage = "hello what can i help you";
  const userInputRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [Rows, setRows] = useState();
  const [fullscreenChat, setFullscreenChat] = useState(false);
  let rows;

  useEffect(() => {
    rows = prompt.split("\n").length;
    setRows(rows);

    // handle input bar height
    if (rows < 4) {
      userInputRef.current.style.height = `${rows * 19}px`;
    }
    setExpanded(rows > 1 || fullscreenChat);
  }, [prompt, fullscreenChat]);

  // Functions
  function getPromptOnChange(e) {
    setPrompt(e.target.value);
  }
  function fullscreenChatControler() {
    setFullscreenChat(!fullscreenChat);
    userInputRef.current.focus();
  }
  function handelRety() {
    console.log("rety");
  }
  function handelCopy(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <main
      className={`chat-container ${openedChat ? "openedChat-state" : "welcome-state"} ${fullscreenChat ? "fullscreen-chat" : ""}`}
    >
      <h1
        className={`welcome-message ${openedChat || fullscreenChat ? "" : "welcome-state"}`}
      >
        {welcomeMessage}
      </h1>
      <section
        className={`chat-area ${openedChat && !fullscreenChat ? "openedChat-state" : ""}`}
      >
        <div className="chat-area-container">
          <div style={{ marginBottom: "40px" }}></div>
          {
            // [...,{ chatID: chatId,chatName: chatName, chat: [..., { role: "ai", text: response }] }]
            //  chat = chatHistory.filter();
            chatHistory
              .find((item) => item.chatID === chatId)
              // ? is optional chaining If it does not exist (undefined): Stop execution
              // immediately and return undefined shorthand FOR ternary operator
              ?.chat.map((h, index) => (
                <ChatMessage key={index} role={h.role} text={h.text} />
              ))
          }
        </div>
      </section>
      <div
        className={`input-area ${openedChat ? "openedChat-state" : ""} ${fullscreenChat ? "fullscreen-chat" : ""}`}
      >
        <div
          className={`input-bar ${expanded ? "rows" : ""} ${fullscreenChat ? "fullscreen-chat" : ""}`}
        >
          <textarea
            className={`user-input ${expanded ? "rows" : ""} ${fullscreenChat ? "fullscreen-chat" : ""}`}
            onChange={getPromptOnChange}
            value={prompt}
            ref={userInputRef}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.ctrlKey) {
                setFullscreenChat(false);
                onSent();
              }
            }}
            autoFocus
            placeholder="Speak freely from your soul, I just machine you stupid psycho"
            id="prompt"
          ></textarea>
          <div
            className={`max-min-imize ${Rows > 2 || fullscreenChat ? "activeGrid" : ""}`}
            onClick={fullscreenChatControler}
          >
            <Maximize
              className={`Maximize ${fullscreenChat ? "" : "active"}`}
              weight="Filled"
              strokeWidth={3}
            />
            <Minimize
              className={`Minimize ${fullscreenChat ? "active" : ""}`}
              weight="Filled"
              strokeWidth={3}
            />
          </div>
        </div>
        <div className="input-op-container">
          <div className="plus item">
            <PopUpMenu
              options={[
                {
                  text: "First option",
                  // icon: '',
                  optionFun: () => console.log(),
                  isSpacer: false,
                },
                {
                  text: "This is the second",
                  // icon: '',
                  optionFun: () => console.log(),
                  isSpacer: false,
                },
              ]}
            >
              <Plus weight="Filled" />
            </PopUpMenu>
          </div>
          <div className="cut-throw-for-input-area"></div>
          {/* <div className="mic item">
            <Microphone weight="Filled" />
          </div> */}
          <div
            onClick={() => {
              setFullscreenChat(false);
              userInputRef.current.focus();
              onSent();
            }}
            className="enter item"
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="disclaimer-select-model">
        <span className={`disclaimer ${openedChat ? "visible" : ""}`}>
          Don't use Ai for everything your brain will die
        </span>
        <ModelControl></ModelControl>
      </div>
      <div className={`shift-up ${openedChat ? "" : "welcome-state"}`}></div>
      <div
        className="menu-btn-small-screen"
        onClick={() => setExpandedSideBar(true)}
      >
        <Sidebar2 />
      </div>
      <div
        className="menu-btn-small-screen"
        style={{ top: "60px" }}
        onClick={() => setExpandedSideBar(true)}
      >
        <History />
      </div>
    </main>
  );

  function ChatMessage(props) {
    return (
      <>
        <div className={`${props.role === "user" ? "user" : "ai"}-msg`}>
          {props.role === "ai" ? (
            <MarkdownRenderer content={props.text} />
          ) : (
            props.text
          )}
        </div>
        <div className={` msg-op ${props.role === "user" ? "user" : "ai"}`}>
          <div className="copy op" onClick={() => handelCopy(props.text)}>
            <Copy3 className="item" size={20} />
            {/* <CopySuccess className="item" size={20} /> */}
          </div>
          {props.role === "ai" ? (
            <div className="op">
              <Restart onClick={() => handelRety()} size={20} />
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
