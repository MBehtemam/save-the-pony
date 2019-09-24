import * as ActionTypes from "../Actions/ActionTypes";
import IAction from "../Interfaces/IAction";
import ICustomGame from "../Interfaces/ICustomGame";

export const initialState: ICustomGame = {
  width: 15,
  height: 15,
  ponyName: ""
};
const customGameReducer = (
  state: ICustomGame = initialState,
  action: IAction
): ICustomGame => {
  switch (action.type) {
    case ActionTypes.CUSTOM_GAME_SET_HEIGHT:
      return {
        ...state,
        height: action.payload
      };
    case ActionTypes.CUSTOM_GAME_SET_WIDTH:
      return {
        ...state,
        width: action.payload
      };
    case ActionTypes.CUSTOM_GAME_SET_PONY_NAME:
      return {
        ...state,
        ponyName: action.payload
      };
    case ActionTypes.CUSTOM_GAME_SET:
      return action.payload;
    case ActionTypes.CLEAR_CUSTOM_GAME:
      return initialState;
    default:
      return state;
  }
};
export default customGameReducer;
