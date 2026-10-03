import PopUpMenu from "../popUpMenu/popUpMenu";
import { ChatContext } from "../../context/context";
import { useContext } from "react";

export default function ModelControl() {
  const { model, setModel } = useContext(ChatContext);
  const models = [
    // { name: "Gemini 3.1 Pro", modelCode: "gemini-3.1-pro-preview" },
    { name: "Gemini 3.8 Flash", modelCode: "gemini-3.8-flash" },
    { name: "Gemini 3.7 Flash", modelCode: "gemini-3.7-flash" },
    { name: "Gemini 3.6 Flash", modelCode: "gemini-3.6-flash" },
    { IsSpacer: true },
    { name: "Gemini 3.5 Flash Lite", modelCode: "gemini-3.5-flash-lite" },
  ];

  function setModelFn(currentModel) {
    setModel(currentModel);
  }

  return (
    <PopUpMenu
      options={models.map((m) => ({
        text: m.name,
        optionFun: () => setModelFn(m.modelCode),
        isSpacer: m.IsSpacer,
      }))}
      isText={true}
    >
      {model}
    </PopUpMenu>
  );
}
