import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";

export const setDomokunPosition = (position: number): IAction => ({
  type: ActionTypes.SET_DOMOKUN_POSITION,
  payload: position
});

export const clearDomokunPosition = (): IAction => ({
  type: ActionTypes.CLEAR_DOMOKUN_POSITION,
  payload: null
});
