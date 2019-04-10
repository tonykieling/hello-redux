export function setTechnology (text) {
  console.log("actions, TEXT: ", text);
  return {
     type: "SET_TECHNOLOGY",
     tech: text
   }
}
