import { useEffect, useRef, useState } from "react";

// useState() = Re-renders the component when the state value changes.
// useRe() = "use Reference" Does not re-renders when its value changes.
//          When you want a component to "remember" some information,

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

export default function UseRef() {
  //   const [numbers, setNumbers] = useState(0);
  const numbersRef = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // when mount
    console.log(numbersRef);
    console.log(inputRef);
  }, []);

  useEffect(() => {
    console.log(")useRef Render");
  });

  //   function handelClick() {
  //     setNumbers((n) => n + 1);
  //   }

  function handelClick() {
    numbersRef.current++;
    inputRef.current.focus();
    inputRef.current.style.background = "gray";
    inputRef.current.style.border= '1px solid white'

  }

  return (
    <>
      <button onClick={handelClick} className="btn1">
        click!
      </button>
      {/* ref={} = its special attribute to create reference */}
      <input type="text" ref={inputRef} />
    </>
  );
}
