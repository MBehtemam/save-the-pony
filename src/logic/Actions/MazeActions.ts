import * as ActionTypes from "./ActionTypes";
import IBoard from "../Interfaces/IBoard";
import IAction from "../Interfaces/IAction";

/**
 *  set board
 * @param boardProps board properties
 */
export const setBoard = (boardProps: IBoard): IAction => ({
  type: ActionTypes.SET_BOARD,
  payload: boardProps
});
