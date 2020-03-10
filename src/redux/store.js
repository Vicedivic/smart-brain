import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import userMiddleware from "./middleware/user";
import apiMiddleware from "./middleware/api";
import imageMiddleware from "./middleware/image";

const initialState = {};

let composeEnhancers = compose;
if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...userMiddleware, apiMiddleware, imageMiddleware))
);

export default store;
