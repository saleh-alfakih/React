import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../../context/context";
import "./msgPopUp.css";
import { Xmark } from "reicon-react";

function MsgPopUp() {
  const { msgPopUpOp, setMsgPopUpOP } = useContext(ChatContext);

  return (
    <>
      <div
        className={`close-msg-pop-up ${msgPopUpOp.isOpen ? "active" : ""}`}
        onClick={() => setMsgPopUpOP((p) => [{ ...p, isOpen: false }])}
      ></div>
      <menu
        className={`msg-pop-up ${msgPopUpOp.isOpen ? "activeGrid" : ""} ${
          msgPopUpOp.type === "normal"
            ? "normal"
            : msgPopUpOp.type === "danger"
              ? "danger"
              : "warning"
        }`}
      >
        <div
          className="close"
          onClick={() => setMsgPopUpOP((p) => [{ ...p, isOpen: false }])}
        >
          <Xmark strokeWidth={2} />
        </div>
        <span className="text">{msgPopUpOp.msgText}</span>
        <div className="button-container">
          <button
            className="cansel"
            onClick={() => setMsgPopUpOP((p) => [{ ...p, isOpen: false }])}
          >
            Cansel
          </button>
          <button
            className="action"
            onClick={() => {
              msgPopUpOp.funAction();
              setMsgPopUpOP((p) => [{ ...p, isOpen: false }]);
            }}
          >
            {msgPopUpOp.btnAction}
          </button>
        </div>
      </menu>
    </>
  );
}

function MsgPopUpInput() {
  const { msgPopUpInput, setMsgPopUpInput } = useContext(ChatContext);
  const inputRef = useRef("");
  let input = "";

  function getUserInput(e) {
    input = e.target.value;
  }
  useEffect(() => {
    inputRef.current.focus();
  }, [msgPopUpInput.isOpen]);

  return (
    <>
      <div
        className={`close-msg-pop-up ${msgPopUpInput.isOpen ? "active" : ""}`}
        onClick={() => setMsgPopUpInput((p) => [{ ...p, isOpen: false }])}
      ></div>
      <menu
        className={`msg-pop-up gridAdjust ${msgPopUpInput.isOpen ? "activeGrid" : ""}`}
      >
        <div
          className="close"
          onClick={() => setMsgPopUpInput((p) => [{ ...p, isOpen: false }])}
        >
          <Xmark strokeWidth={2} />
        </div>
        <label className="text">{msgPopUpInput.msgText}</label>
        <textarea className="inputBar" onChange={getUserInput} ref={inputRef} defaultValue={ msgPopUpInput.startValue}>
        </textarea>
        <div className="button-container">
          <button
            className="cansel"
            onClick={() => setMsgPopUpInput((p) => [{ ...p, isOpen: false }])}
          >
            Cansel
          </button>
          <button
            className="action"
            onClick={() => {
              msgPopUpInput.funAction(input);
              setMsgPopUpInput((p) => ({ ...p, isOpen: false }));
            }}
          >
            {msgPopUpInput.btnAction}
          </button>
        </div>
      </menu>
    </>
  );
}

export { MsgPopUp, MsgPopUpInput };
