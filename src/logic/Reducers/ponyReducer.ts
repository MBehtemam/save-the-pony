import * as ActionTypes from "../Actions/ActionTypes";
import IPony from "../Interfaces/IPony";

export const initialState: IPony = {
  ponyPosition: -1,
  ponyName: ""
};

const ponyReducer = (state: IPony = initialState, action: any): IPony => {
  switch (action.type) {
    case ActionTypes.SET_PONY_NAME:
      return {
        ...state,
        ponyName: action.payload
      };
    case ActionTypes.SET_PONY:
      return action.payload;
    case ActionTypes.CLEAR_PONY:
      return initialState;
    case ActionTypes.SET_PONY_POSITION:
      return {
        ...state,
        ponyPosition: action.payload
      };
    case ActionTypes.SET_PONY_POSITION:
      return {
        ...state,
        ponyName: action.paylod
      };
    default:
      return state;
  }
};
export default ponyReducer;
