import { useContext } from "react";
import { VarContext } from "./useContext";

export default function ComponentD() {
    const user = useContext(VarContext)

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h3 style={{color: "#174ad4"}}>hello {user}</h3>
    </div>
  );
}
