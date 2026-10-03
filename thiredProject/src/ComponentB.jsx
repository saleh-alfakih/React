import { useContext } from "react";
import ComponentC from "./ComponentC";
import { VarContext } from "./useContext";

export default function ComponentB(){
    const user = useContext(VarContext)

    return (
        <div className="box">
            <h1>ComponentB</h1>
            <h3 style={{color: "rgb(20 68 197 / 99%)"}}>Hello again {user}</h3>
        <ComponentC></ComponentC>
        </div>
    )
} 