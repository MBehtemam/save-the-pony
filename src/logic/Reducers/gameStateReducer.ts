import * as ActionTypes from "../Actions/ActionTypes";
import GameState from "../Enums/GemeState";

export const initialState: GameState = GameState.STOP;

const gameStateReducer = (
  state: GameState = initialState,
  action: any
): GameState => {
  switch (action.type) {
    case ActionTypes.SET_GAME_STATE_START:
      return GameState.START;
    case ActionTypes.SET_GAME_STATE_STOP:
      return GameState.STOP;
    case ActionTypes.SET_GAME_STATE_WIN:
      return GameState.WIN;
    case ActionTypes.SET_GAME_STATE_LOOSE:
      return GameState.LOOSE;
    default:
      return state;
  }
};
export default gameStateReducer;
