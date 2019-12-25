import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import mwWebsocket from "../middleware/mwWebsocket";

const initialState = {};

const middleware = [thunk, mwWebsocket];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;