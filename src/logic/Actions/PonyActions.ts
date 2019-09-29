import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";
import MoveEnum from "../Enums/MoveEnum";

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

export const movePony = (interestedPosition: number): IAction => ({
  type: ActionTypes.PONY_MOVE,
  payload: interestedPosition
});
