import { useState, useEffect } from "react";

// useEffect() = do something when:
//                 component re-rend
//                 component mounts
//                 state of a value
// useEffect(function, [dependencies])

//1. useEffect(()=> {})             // Runs after every re-render
//2. useEffect(() => {}, [])       // Runs only on mount
//3. useEffect(() => {}, [variables]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

export default function UseEffect() {
  const [hight, setHight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  // ===== Event Listener ===================================
  //   window.addEventListener("resize", handleResize);
  //   // every time the element rander event listener will be
  //   // added for each change
  //   console.log("Event Listener Added");
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");
    // Clean Up!
    // it's Arrow function so you are not returning directly first time
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Rmoved");
    };
  }, []); // add event listener when element mount

  useEffect(() => {
    document.title = `${hight}x${width}`;
  }, [hight, width]);

  // ===== Function ===================================
  function handleResize() {
    setHight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Hight: {hight}px</p>
    </>
  );
}
