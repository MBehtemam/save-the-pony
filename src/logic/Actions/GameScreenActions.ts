import * as ActionTypes from "./ActionTypes";
import GameScreenEnum from "../Enums/GameScreenEnum";
import IAction from "../Interfaces/IAction";

export const setGameScreen = (screen: GameScreenEnum): IAction => ({
  type: ActionTypes.GAME_SCREEN_SET,
  payload: screen
});
