import * as ActionTypes from "../Actions/ActionTypes";
import IBoard from "../Interfaces/IBoard";

export const initialState: IBoard = {
  width: 0,
  height: 0,
  difficulty: 0,
  data: []
};

const boardReducer = (state: IBoard = initialState, action: any): IBoard => {
  switch (action.type) {
    case ActionTypes.SET_BOARD:
      return action.payload;
    case ActionTypes.CLEAR_BOARD:
      return initialState;
    default:
      return state;
  }
};
export default boardReducer;
