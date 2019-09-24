import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";

export const setEndPointPosition = (position: number): IAction => ({
  type: ActionTypes.SET_END_POINT_POSITION,
  payload: position
});

export const clearEndPointPosition = (): IAction => ({
  type: ActionTypes.CLEAR_END_POINT_POSITION,
  payload: null
});
