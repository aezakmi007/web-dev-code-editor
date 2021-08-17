/* eslint-disable import/no-anonymous-default-export */
export default(state = (
  localStorage.getItem("js")? JSON.parse(localStorage.getItem("js")): ""
), action) => {
  switch(action.type){

    case "INPUT_JS" :
      return action.payload;

    default:
      return state  
  };
}