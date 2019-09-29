import * as ActionTypes from "../Actions/ActionTypes";
import IAction from "../Interfaces/IAction";

export const initialState: string[][] = [];

const wallsReducer = (
  state: string[][] = initialState,
  action: IAction
): string[][] => {
  switch (action.type) {
    case ActionTypes.SET_WALLS:
      return action.payload;
    case ActionTypes.CLEAR_WALLS:
      return initialState;
    default:
      return state;
  }
};

export default wallsReducer;
