import { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({ year: 2029, model: "seal9", make: "BYD" });

  function changCarYear(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function changCarModel(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }
  function changCarMack(e) {
    // we will use spread operator and round the object with parentheses
    //  so it's not multi line arrow function
    setCar((c) => ({ ...c, make: e.target.value }));
  }

  return (
    <>
      <div className="disply-car">
        {car.make} {car.model}, {car.year}
      </div>
      <form>
        <input onChange={changCarYear} type="number" value={car.year} />
        <input onChange={changCarModel} type="text" value={car.model} />
        <input onChange={changCarMack} type="text" value={car.make} />
      </form>
    </>
  );
}
