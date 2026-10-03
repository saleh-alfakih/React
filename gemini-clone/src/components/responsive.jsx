import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/context";

export default function useResponsive() {
  const { setExpandedSideBar } = useContext(ChatContext);
  const [width, setWidth] = useState();

  // get width
  useEffect(() => {
    function checkeSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", checkeSize);
    return () => window.removeEventListener("resize", checkeSize);
  }, []);

  useEffect(() => {
    if (width < 1120) {
      setExpandedSideBar(false);
    }
  }, [width]);
}
