import * as ActionTypes from "../Actions/ActionTypes";
import IAction from "../Interfaces/IAction";

export const initialState: number[] = [];

const wallsReducer = (
  state: number[] = initialState,
  action: IAction
): number[] => {
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
