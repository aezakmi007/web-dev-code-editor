/* eslint-disable import/no-anonymous-default-export */
export default (
  state = localStorage.getItem("css")
    ? JSON.parse(localStorage.getItem("css"))
    : "",
  action
) => {
  switch (action.type) {
    case "INPUT_CSS":
      return action.payload;

    default:
      return state;
  }
};
