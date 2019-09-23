import * as ActionTypes from "../Actions/ActionTypes";
export interface IState {
  ponyPosition: number;
  ponyName: string;
}

export const initialState: IState = {
  ponyPosition: -1,
  ponyName: ""
};

const ponyReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
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
