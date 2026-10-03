import { useEffect, useRef, useState } from "react";
import "./popUpMenu.css";
import { DarkLight, InfoCircle } from "reicon-react";

// options template
// options={[
//   {
//     text: "Theme igys",
//     icon: <DarkLight />,
//     optionFun: () => console.log(),
//     isSpacer: false,
//   },

// first argument is props so you have to Destructure children
export default function PopUpMenu({
  children,
  options,
  isLarg = false,
  isText = false,
}) {
  const [toggled, setToggled] = useState(false);
  const [position, setPosition] = useState();
  const triggerRef = useRef(null);

  // for close
  const popUpRef = eventListenerCloseRef({
    toggled,
    setToggled,
    triggerRef,
  });

  let { isTop, isLeft, Top, Left } = 0;

  if (toggled) {
    //position

    // calculate position
    isTop = position.top < window.innerHeight / 2;
    isLeft = position.left < window.innerWidth / 2;

    Top = isTop ? position.bottom + 6 : position.top - 6;
    Left = isLeft ? position.left : position.right;
  }
  //

  return (
    <>
      <menu
        className={`pop-up-menu ${toggled ? "activeGrid" : ""} ${isLarg ? "larg" : "small"}`}
        ref={popUpRef}
        style={{
          top: Top + "px",
          left: Left + "px",
          transform: `${isTop ? "translateY(0)" : "translateY(-100%)"} ${isLeft ? "translateX(0)" : "translateX(-100%)"}`,
        }}
      >
        {options.map((op, index) => {
          // function handleClick(e) {
          //   op.optionFun(e, openedFor); // TODO
          //   // onClose(); // TODO
          // }
          if (op.isSpacer) return <hr className="spacer" key={index} />;
          return (
            <button
              className={`btn-op ${isLarg ? "larg" : "small"}`}
              key={index}
              // onClick={(e) => op.optionFun(e, openedFor)}
              onClick={(e) => {
                op.optionFun(e);
                setToggled((t) => !t);
              }}
            >
              {op.icon != null ? <span className="icon">{op.icon}</span> : null}
              <span className="text">{op.text}</span>
            </button>
          );
        })}
      </menu>
      <button
        className={`pop-up-menu-trigger ${isText ? "text" : ""}`}
        ref={triggerRef}
        onClick={(e) => {
          setPosition(e.currentTarget.getBoundingClientRect());
          setToggled((t) => !t);
        }}
      >
        {children}
      </button>
    </>
  );
}

// ref that add 2 eventListener with their functions
function eventListenerCloseRef({ toggled, setToggled, triggerRef }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!toggled) return;

    // functions
    function handlePointerDown(e) {
      // Check if click was inside the menu OR inside the trigger button
      if (
        !ref.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      )
        setToggled(false);
    }
    function handleEsc(e) {
      if (e.key === "Escape") setToggled(false);
    }

    // add Event Listener
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [toggled]);

  return ref;
}
