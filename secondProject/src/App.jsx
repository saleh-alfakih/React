// import { Fragment } from "react";

// in React, anything you put between a component's opening
//  and closing tags (<Area> </Area>)
//  gets passed to the component as a special prop called children.
// you have to explicitly place {props.children} (or {children} if destructured)
export function Area(props) {
  return <section className="area">{props.children}</section>;
}

export function HeaderPage() {
  return (
    <header className="header-page">
      <div className="logo"></div>
      <NavBar />
    </header>
  );
}
function NavBar() {
  return (
    <nav className="nav-bar">
      <NavBarOp name="Home" url="Home" />
      <NavBarOp name="pouket" url="pouket" />
      <NavBarOp name="About" url="About" />
    </nav>
  );
}
// using Fragment so you can send a multiple element with no parents
// props:properties that shares between components the parent component can
// send data to the child component <componentName key="value"
function NavBarOp(props) {
  return (
    <>
      <div className="op">
        <a href={props.url}>
          <span className="NavBarOpTitel">{props.name}</span>
        </a>
      </div>
    </>
  );
}
// export {Area, HeaderPage}
// export default HeaderPage;
