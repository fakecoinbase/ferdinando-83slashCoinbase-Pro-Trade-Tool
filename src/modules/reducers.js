import {combineReducers} from "redux";
import {websocketReducer} from "./websocket";
import {bookReducer} from "./book";

const rootReducer = combineReducers({
  websocket: websocketReducer,
  book: bookReducer
});

export default rootReducer;