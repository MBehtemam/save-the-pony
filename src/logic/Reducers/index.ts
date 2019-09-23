import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import domokunReducer from "./domkunReducer";
import endPointReducer from "./endPointReducer";
import ponyReducer from "./ponyReducer";
import gameStateReducer from "./gameStateReducer";
const rootReducer = combineReducers({
  board: boardReducer,
  domokun: domokunReducer,
  endPoint: endPointReducer,
  pony: ponyReducer,
  gameState: gameStateReducer
});
export default rootReducer;
