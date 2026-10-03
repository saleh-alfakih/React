export default function Button() {
  let btnText = "HUSSAIN";
  let count = 0;

  const fun1 = (word) => {
    count++;
    if (count < 3) {
      console.log(`hi be a man that can act fast and right ${word} ` + count);
    } else {
      btnText = "stop";
      console.log(`stop reached                            ${word} ` + count);
    }
  };
  const print_e = (e) => {
   const moonLanding = new Date();
    e.target.textContent = "what claude " + moonLanding.getFullYear();
  };

  return (
    <>
      <button onClick={() => fun1("hook")} className="btn1">
        {btnText}
      </button>
      <button onDoubleClick={print_e} className="btn1">
        Double Click
      </button>
    </>
  );
}

// function Button() {
//   let count = 0;

//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} you clicked me ${count} times`);
//     } else {
//       console.log(` ${name} stop clicking me!`);
//     }
//   };
//   return <button onClick={() => handleClick("Bro")}>Click me</button>;
// }
// export default Button;
