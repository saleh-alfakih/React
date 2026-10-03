import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const displayColor = document.querySelector(".display-color");

  function changeColor(e) {
    setColor(e.target.value);
  }
  function copy() {
    navigator.clipboard.writeText(color);
    document.querySelector(".display-color").textContent = "copid!";
    setTimeout(() => {
      document.querySelector(".display-color").textContent = `${color}`;
    }, 800);
  }

  return (
    <div className="color-picker-container">
      <div
        onClick={copy}
        className="display-color"
        // First curly brackets to inject JS second curly brackets for CSS
        style={{ backgroundColor: color }}
      >
        {color}
      </div>
      <input
        onChange={changeColor}
        type="color"
        value={color}
        className="color-picker"
      />
    </div>
  );
}
