import { combineReducers } from "redux";
import htmlReducer from "./htmlReducer";
import cssReducer from "./cssReducer";
import jsReducer from "./jsReducer";

export default combineReducers({
  html: htmlReducer,
  css: cssReducer,
  js: jsReducer,
});
