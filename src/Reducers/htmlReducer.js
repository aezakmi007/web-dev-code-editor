/* eslint-disable import/no-anonymous-default-export */
export default (
  state = localStorage.getItem("html")
    ? JSON.parse(localStorage.getItem("html"))
    : "",
  action
) => {
  switch (action.type) {
    case "INPUT_HTML":
      return action.payload;

    default:
      return state;
  }
};
