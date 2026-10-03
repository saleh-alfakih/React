import { GoogleGenAI } from "@google/genai";

const apiKey = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
let response;

async function SendGetAnswer(prompt, model, lastInteractionId) {
  console.log("SendGetAnswer lastInteractionId", lastInteractionId);
  
  // Multi-turn conversations with stateful approach
  try {
    const settings = {
      model: model,
      input: prompt,
      // ...(lastInteractionId && { previous_interaction_id: lastInteractionId }),
      // background:true,
    };
    if (lastInteractionId) {
      console.log("get the lastInteractionId");
      settings.previous_interaction_id = lastInteractionId;
    }

    const interaction = await apiKey.interactions.create(settings);

    console.log("g1");

    // return [interaction.id, interaction.output_text];
    return { interactionId: interaction.id, aiMsg: interaction.output_text };
  } catch (error) {
    let errMsg = error;
    console.log("EEEEEEEEEEEEEEEEEEEEEEEE",error);

    if (typeof error.message === "string" && error.message.trim().startsWith("{"))
      errMsg = JSON.parse(error.message);
    if(errMsg?.error?.message) errMsg = errMsg.error.message;
      else {
      errMsg = errMsg?.message || "g2 gemini_start.js error tryng to get error";
    }

    errMsg = errMsg ? errMsg : "g22 gemini_start.js error tryng to get error";
    return {
      interactionId: null,
      aiMsg: errMsg,
    };
  }

  // try {
  //   response = await apiKey.models.generateContent({
  //     model: model,
  //     contents: prompt,
  //   });
  //   return response.text;
  // } catch (Error) {
  //   return JSON.parse(Error.message).error.message;
  // }
}
export default SendGetAnswer;

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
// let response;

// async function SendGetAnswer(prompt, model) {
// // try {
//   const response = await ai.interactions.create({
//     model: model,
//     input: prompt,
//     stream: true,
//   });
//   for await (const event of stream) {
//     console.log(event);
//   }
//   return response.text;
// // } catch (Error) {
// //   return JSON.parse(Error.message).error.message;
// // }
// }
// export default SendGetAnswer;
