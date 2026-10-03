import "@fontsource-variable/inter";
import SideBar from "../components/sideBar/sideBar";
import Chat from "../components/chat/chat";
import useResponsive from "../components/responsive";
import { MsgPopUp, MsgPopUpInput } from "../components/msgPopUp/msgPopUp";

export default function App() {
  // Hooks can only be executed inside the body of a functional component.
  useResponsive();
  return (
    <>
      <SideBar></SideBar>
      <Chat></Chat>
      <MsgPopUp></MsgPopUp>
      <MsgPopUpInput></MsgPopUpInput>
    </>
  );
}
