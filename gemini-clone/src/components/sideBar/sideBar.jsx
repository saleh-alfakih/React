import "./sideBar.css";
import { assets } from "../../gemini-clone-assets/assets/assets";
import {
  ArrowsLeft,
  ArrowsRight,
  Settings2,
  History,
  MoreH,
  DarkLight,
  InfoCircle,
  SquareArrowLeft2,
  Trash2,
  User,
} from "reicon-react";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../context/context";
import PopUpMenu from "../popUpMenu/popUpMenu";

export default function SideBar() {
  const {
    setChatHistory,
    expandedSideBar,
    setExpandedSideBar,
    setIsDark,
    openNewChat,
    chatHistory,
    chatId,
    selectChat,
    setMsgPopUpOP,
    setOpenedChat,
    deleteChat,
    setPersonalizedAnswer,
    personalizedAnswer,
    msgPopUpInput,
    setMsgPopUpInput,
  } = useContext(ChatContext);

  return (
    <aside className={`side-bar ${expandedSideBar ? "active" : ""}`}>
      <div className={`top ${expandedSideBar ? "" : "colapsed"}`}>
        <div className={`logo-menu ${expandedSideBar ? "active" : ""}`}>
          <img
            className={`logo ${expandedSideBar ? "active" : ""}`}
            src={assets.logo}
            alt=""
          />
          <div
            className={`menu ${expandedSideBar ? "active" : ""}`}
            onClick={() => setExpandedSideBar(!expandedSideBar)}
          >
            <SquareArrowLeft2 className={`menu1-mobile`} />
            <ArrowsLeft
              className={`menu1 ${expandedSideBar ? "active" : ""}`}
            />
            <ArrowsRight
              className={`menu2 ${expandedSideBar ? "" : "active"}`}
            />
          </div>
        </div>
        <div
          className={`new-chat item ${expandedSideBar ? "" : "colapsed"} `}
          onClick={openNewChat}
        >
          <img src={assets.plus_icon} alt="" />
          <p className={`new-chat-text ${expandedSideBar ? "active" : ""}`}>
            New Chat
          </p>
        </div>
        <div className="title">
          <p className={`resent-title ${expandedSideBar ? "active" : ""}`}>
            Recent
          </p>
          <History
            className={`resent-icon ${expandedSideBar ? "" : "active"}`}
            onClick={() => setExpandedSideBar(!expandedSideBar)}
          />
        </div>
        <div className={`recent ${expandedSideBar ? "active" : ""}`}>
          {chatHistory.map((chat) => (
            <div
              className={`resent-entry item ${chat.chatID === chatId ? "selected" : ""}`}
              key={chat.chatID}
              onClick={() => {
                selectChat(chat.chatID);
              }}
            >
              <p>{chat.chatName}</p>
              <PopUpMenu
                options={[
                  {
                    text: "Delete Chat",
                    optionFun: () => deleteChat(chat.chatID),
                  },
                ]}
              >
                <MoreH className="op" weight="Filled" />
              </PopUpMenu>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="user-profile">
          <div className="profile-img">
            <img src={assets.user_profile} alt="" />
          </div>
          <div className={`profile-text ${expandedSideBar ? "active" : ""}`}>
            <div className="email">exampleexaxample@gmail.com</div>
            <div className="status">Pro</div>
          </div>
          <div
            className={`settings bottom-item resent-entry  ${expandedSideBar ? "active" : ""}`}
          >
            <PopUpMenu
              options={[
                {
                  text: "Personalized Answer",
                  icon: <User />,
                  optionFun: () =>
                    setMsgPopUpInput(() => ({
                      isOpen: true,
                      startValue: personalizedAnswer,

                      msgText: `Customize the responses, like "Speak in technical terms".`,
                      btnAction: "Ok",
                      funAction: (input) => {
                        console.log("ok", input);
                        setPersonalizedAnswer(input);
                      },
                    })),
                },
                {
                  text: "Delete History",
                  icon: <Trash2 />,
                  optionFun: () =>
                    setMsgPopUpOP(() => ({
                      isOpen: true,
                      msgText: "Do you want to delete your Local History.",
                      type: "danger",
                      btnAction: "Delete",
                      funAction: () => {
                        setChatHistory([]);
                        setOpenedChat(false);
                      },
                    })),
                },
                {
                  text: "Theme",
                  icon: <DarkLight />,
                  optionFun: () => setIsDark((t) => !t),
                },
                {
                  text: "About",
                  icon: <InfoCircle />,
                  optionFun: () => setMsgPopUpOP(() => ({
                      isOpen: true,
                      msgText: "Build a Gemini Clone using React and the Gemini API.\n writing all the code independently,\n using AI strictly for troubleshooting and questions.",
                      type: "normal",
                      btnAction: "↗ GitHub",
                      funAction: () => {
                        setChatHistory([]);
                        setOpenedChat(false);
                      },
                    })),
                },
              ]}
              isLarg={true}
            >
              <Settings2 />
            </PopUpMenu>
          </div>
        </div>
      </div>
    </aside>
  );
}
