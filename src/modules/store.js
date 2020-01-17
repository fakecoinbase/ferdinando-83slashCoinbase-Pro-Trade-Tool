import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import middleware from "../middleware";

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;