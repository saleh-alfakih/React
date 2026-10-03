import { useState } from "react";

export default function Array() {
  const [array, setArray] = useState(["Apple", "banana", "avocado"]);

  function addFood(e) {
    e.preventDefault();
    const newFood = document.querySelector("#food-input").value;
    
    document.querySelector("#food-input").value = "";
    if (newFood.trim() === "") return;

    // updater function = A function passed as an argument to setState() usually
    setArray((a) => [...a, newFood]);
  }

  function removeLi(index) {
    // Underscore mean we are ignoring the element because we are not using it
    setArray(array.filter((_, i) => i !== index));
  }

  return (
    <div>
      <ul>
        {array.map((arr, index) => (
          <li key={index} onClick={(e) => removeLi(index)}>
            {arr}
          </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder="food foooood" id="food-input" />
        <button onClick={addFood} className="btn1">
          ↩
        </button>
      </form>
    </div>
  );
}
