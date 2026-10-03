import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { PageHeader, PageMain, PageFooter } from "./App.jsx";
import Button from "./click_event.jsx";
import Hook from "./hook.jsx";
import OnChange from "./onChange.jsx";
import ColorPicker from "./colorPicker.jsx";
import MyCounter from "./updaterFunction.jsx";
import Car from "./car.jsx";
import Array from "./updaeArray.jsx";
import ArrayOfObjects from "./updateArrayOfObject.jsx";
import ToDoList from "./ToDo-List.jsx";
import UseEffect from "./useEffect.jsx";
import Clock from "./digitalClock.jsx";
import UseContext from "./useContext.jsx";
import UseRef from "./useRef.jsx";
import StopWatch from "./stopWatch.jsx";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <PageHeader />
    <PageMain>
      <OnChange></OnChange>
      <Hook></Hook>
      <Button></Button>
      <ColorPicker />
      <MyCounter></MyCounter>
      <Car />
      <Array></Array>
      <ArrayOfObjects />
      <ToDoList></ToDoList>
      <UseEffect></UseEffect>
      <UseContext></UseContext>
      <UseRef></UseRef>
      <StopWatch></StopWatch>
      <Clock></Clock>
      <Clock></Clock>
      <Clock></Clock>
    </PageMain>
    <PageFooter />
  </StrictMode>,
);
