import React, { useState } from "react";

// onChange = event handler used with form elements
// ex: <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes

export default function OnChange() {
  const [name, setName] = useState("gg");

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <div className="input-box">
      <div className="box">
        <div className="box">{name}</div> 
      </div>
      <input onChange={changeName} type="text" />
    </div>
  );
}
