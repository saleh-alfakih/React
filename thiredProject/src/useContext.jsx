import { useContext, createContext, useState } from "react";

import ComponentA from "./ComponentA";
// useContext() = React Hook that allows you to share values between
// multiple levels of components (children's of component) without 
// passing props throw each level (without prop drilling)

export const VarContext = createContext();

export default function UseContext() {
  const [user, setUser] = useState("human being");

  return (
    <VarContext.Provider value={user}>
      <ComponentA />
    </VarContext.Provider>
  );
}
