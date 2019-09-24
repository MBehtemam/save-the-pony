import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";

export const setGameStart = (): IAction => ({
  type: ActionTypes.SET_GAME_STATE_START,
  payload: null
});

export const setGameStop = (): IAction => ({
  type: ActionTypes.SET_GAME_STATE_STOP,
  payload: null
});

export const setGameLoose = (): IAction => ({
  type: ActionTypes.SET_GAME_STATE_LOOSE,
  payload: null
});

export const setGameWin = (): IAction => ({
  type: ActionTypes.SET_GAME_STATE_WIN,
  payload: null
});
