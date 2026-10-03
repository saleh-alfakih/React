import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Area, HeaderPage } from "./App";
import Footer from "./Footer";
// you dont need to add .jsx vite will resolve it
import Card from "./Card.jsx";
import ConditionalRendering from "./conditionalRendering.jsx";
import List from "./list";

import "./index.css";
import "./App.css";

import img1 from "./assets/i.jpg";
import img2 from "./assets/ii.jpg";
import img3 from "./assets/iii.jpg";

let fruits = [
  { id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pineapple", calories: 37 },
];
const vegetables = [
  { id: 6, name: "potatoes", calories: 110 },
  { id: 1, name: "celery", calories: 15 },
  { id: 8, name: "carrots", calories: 25 },
  { id: 9, name: "corn", calories: 63 },
  { id: 10, name: "broccoli", calories: 50 },
];

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <main className="main">
      <HeaderPage></HeaderPage>
      <Area>
        <Card
          img={img1}
          title="smka"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ut. Libero, error?"
        />
        <Card
          img={img2}
          title="fskk"
          description="dmake qe3r3eq  2r rw wff iw ijrfwqi jriqj"
        />
        <Card
          img={img3}
          title="lgfs"
          description=" f,mqef efdqe rw q q3r r3keq m3r q l"
        />
        <Card />
      </Area>
      <Area>
        <List items={fruits} category="Fruits" />
        <List items={vegetables} category="Vegetables" />
        <List items={fruits} category="Fruits" />
        <List items={vegetables} category="Vegetables" />
        <List/>
      </Area>
      <ConditionalRendering loggedIn={true} username="Saleh Alfakih" />
      <ConditionalRendering />

      <Footer />
    </main>
  </StrictMode>,
);
