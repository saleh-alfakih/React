// React hook = (useState, useEffect, useContext, useReducer, useCallback,etc... )

// useState() = A React hook that allows the creation of a variable
// AND function to update its variable by refreshing the Virtual React DOM.
// [name, setName]
import React, { useState } from "react";

export default function Hook() {
  const [name, setName] = useState("Guest");
  const [day, setDay] = useState(true);
  const [count, setCount] = useState(0);

  const updateName = () => {
    setName("HUSSAIN");
  };
  const toggleDay = () => {
    setDay(!day);
  };

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={updateName} className="btn1">
        {name}
      </button>
      <button onClick={toggleDay} className="btn1">
        {day ? "Day" : "Night"}
      </button>
      <div className="count">
        <div className="btn1">{count}</div>
        <button onClick={increase} className="btn1">
          increase
        </button>
        <button onClick={decrease} className="btn1">
          decrease
        </button>
        <button onClick={reset} className="btn1">
          reset
        </button>
      </div>
    </>
  );
}
