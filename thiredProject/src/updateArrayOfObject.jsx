import { useState } from "react";

export default function ArrayOfObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar(e) {
    e.preventDefault();
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

    function handleRemoveCar(index) {
      setCars(c => c.filter((_, i) => i !== index));
    }
  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div className="ArrayOfObjects-container">
      <h2>Array Of Objects</h2>
      <ol>
        {cars.map((car, index) => {
          return (
            <li key={index} onClick={(e) => handleRemoveCar(index)}>
              {car.year},{car.make},{car.model}
            </li>
          );
        })}
      </ol>
      <form>
        <input
          type="number"
          value={carYear}
          onChange={handleYearChange}
          placeholder="carYear"
        />
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="carMake"
        />
        <br />
        <input
          type="text"
          value={carModel}
          onChange={handleModelChange}
          placeholder="carModel"
        />
        <br />
        <button onClick={handleAddCar} className="btn1">
          Add
        </button>
      </form>
    </div>
  );
}
