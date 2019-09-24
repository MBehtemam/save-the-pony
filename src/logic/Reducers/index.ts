import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import domokunReducer from "./domkunReducer";
import endPointReducer from "./endPointReducer";
import ponyReducer from "./ponyReducer";
import gameStateReducer from "./gameStateReducer";
import poniesReducer from "./poniesReducers";
import customGameReducer from "./customGameReducer";
const rootReducer = combineReducers({
  board: boardReducer,
  domokun: domokunReducer,
  endPoint: endPointReducer,
  pony: ponyReducer,
  gameState: gameStateReducer,
  ponies: poniesReducer,
  customGame: customGameReducer
});
export default rootReducer;
