const setTheLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const changeHtml = (value) => {
  const key = "html";
  setTheLocalStorage(key, value);
  return {
    type: "INPUT_HTML",
    payload: value,
  };
};

export const changeCss = (value) => {
  const key = "css";
  setTheLocalStorage(key, value);
  return {
    type: "INPUT_CSS",
    payload: value,
  };
};

export const changeJs = (value) => {
  const key = "js";
  setTheLocalStorage(key, value);
  return {
    type: "INPUT_JS",
    payload: value,
  };
};
