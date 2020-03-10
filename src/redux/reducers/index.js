import { combineReducers } from "redux";
import userReducer from "./user";
import appReducer from "./app";
import imageReducer from "./image";

export default combineReducers({
  user: userReducer,
  app: appReducer,
  image: imageReducer,
});
