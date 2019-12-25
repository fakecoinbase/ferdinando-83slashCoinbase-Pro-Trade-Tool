import {combineReducers} from "redux";
import {websocketReducer} from "./websocket";
import {tickerReducer} from "./ticker";

const rootReducer = combineReducers({
  websocket: websocketReducer,
  ticker: tickerReducer
});

export default rootReducer;