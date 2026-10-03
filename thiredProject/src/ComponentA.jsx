import ComponentB from "./ComponentB";

export default function ComponentA() {
  return ( 
    <div className="box">
      <h1>ComponentA</h1>
      <ComponentB></ComponentB>
    </div>
  );
}
