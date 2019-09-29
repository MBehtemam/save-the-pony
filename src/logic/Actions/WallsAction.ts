import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";

export const setWalls = (walls: string[][]): IAction => ({
  type: ActionTypes.SET_WALLS,
  payload: walls
});

export const clearWalls = (): IAction => ({
  type: ActionTypes.CLEAR_WALLS,
  payload: null
});
