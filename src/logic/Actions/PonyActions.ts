import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";

export const setPonyName = (ponyName: string): IAction => ({
  type: ActionTypes.SET_PONY_NAME,
  payload: ponyName
});

export const setPonyPosition = (ponyPosition: number): IAction => ({
  type: ActionTypes.SET_PONY_POSITION,
  payload: ponyPosition
});

export const clearPony = (): IAction => ({
  type: ActionTypes.CLEAR_PONY,
  payload: null
});
