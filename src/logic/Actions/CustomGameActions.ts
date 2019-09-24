import * as ActionTypes from "./ActionTypes";
import IAction from "../Interfaces/IAction";
import ICustomGame from "../Interfaces/ICustomGame";

/**
 * this action set width of board
 * @param width width of board
 */
export const customGameSetWidth = (width: number): IAction => ({
  type: ActionTypes.CUSTOM_GAME_SET_WIDTH,
  payload: width
});

/**
 * this action set height of board
 * @param height height of board
 */
export const customGameSetHeight = (height: number): IAction => ({
  type: ActionTypes.CUSTOM_GAME_SET_HEIGHT,
  payload: height
});

/**
 * this action set whole custome game at once
 * @param customGame whole object of custome game
 */
export const customGameSet = (customGame: ICustomGame): IAction => ({
  type: ActionTypes.CUSTOM_GAME_SET,
  payload: customGame
});

/**
 * this action set the name of pony
 * @param ponyName valid name of your pony
 */
export const customGameSetPonyName = (ponyName: string): IAction => ({
  type: ActionTypes.CUSTOM_GAME_SET_PONY_NAME,
  payload: ponyName
});

/**
 * this method clear the custom game
 */
export const clearCustomGame = (): IAction => ({
  type: ActionTypes.CLEAR_CUSTOM_GAME,
  payload: null
});

/**
 * id of maze
 * @param mazeId id of maze that created on the server
 */
export const customGameSetMazeId = (mazeId: string): IAction => ({
  type: ActionTypes.CUSTOME_GAME_SET_MAZE_ID,
  payload: mazeId
});
