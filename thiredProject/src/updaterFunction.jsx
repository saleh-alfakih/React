// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions
import { useState } from "react";

export default function MyCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    // setCount(count + 1) // result count is 1

    // Uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update.
    // React batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.

    setCount((countPrv) => countPrv + 1);
    setCount((countPrv) => countPrv + 1); // result 2
  }

  function decrement() {
    setCount((c) => c - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increment} className="btn1">
        increment
      </button>
      <button onClick={decrement} className="btn1">
        decrement
      </button>
      <button onClick={reset} className="btn1">
        reset
      </button>
    </>
  );
}
