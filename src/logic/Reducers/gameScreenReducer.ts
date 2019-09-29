import GameScreenEnum from "../Enums/GameScreenEnum";
import IAction from "../Interfaces/IAction";
import * as ActionTypes from "../Actions/ActionTypes";

export const initialState: GameScreenEnum = GameScreenEnum.MAIN;

const gameScreenReducer = (
  state: GameScreenEnum = initialState,
  action: IAction
): GameScreenEnum => {
  switch (action.type) {
    case ActionTypes.GAME_SCREEN_SET_GAME:
      return GameScreenEnum.GAME;
    case ActionTypes.GAME_SCREEN_SET_MAIN:
      return GameScreenEnum.MAIN;
    default:
      return state;
  }
};

export default gameScreenReducer;
