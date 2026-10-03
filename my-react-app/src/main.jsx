// // static html with React
// import { createRoot } from "react-dom/client";
// import "./App.css";
// import "./index.css";

// import reactLogo from "./assets/react.svg";
// console.log(<h1>Hello world !</h1>);
// createRoot(document.querySelector("#root")).render(
//   <div className="main-container">
//     <header>
//       <img className="header-img" src={reactLogo} />
//       <p className="header-titel">React Is Grate library</p>
//     </header>
//     <main>
//       <ul>
//         <li>f</li>
//         <li>sd</li>
//         <li>sf</li>
//       </ul>
//       <img src={reactLogo} className="background-shape" />
//     </main>
//   </div>,
// );

// // React components in the same file
// import { createRoot } from 'react-dom/client'
// // import 
// import './App.css'
// import './index.css'


// createRoot(document.querySelector('#root')).render(
//   app()
// )
// function app() {
//   return (
//     <div className="container">
//       <h1 className="header">Hi nfdjask !!</h1>
//       <h2>LEBANON: 1px solid red;</h2>
//     </div>
//   );
// }

// React components import from App.jsx
import { createRoot } from 'react-dom/client'
// import 
import App from './App.jsx'
import './App.css'
import './index.css'


createRoot(document.querySelector('#root')).render(
    <App/>
)
