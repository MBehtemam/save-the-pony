import * as ActionTypes from "../Actions/ActionTypes";
export interface IState {
  position: number;
}
export const initialState: IState = {
  position: -1
};
const endPointReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case ActionTypes.SET_END_POINT_POSITION:
      return {
        position: action.payload
      };
    case ActionTypes.CLEAR_END_POINT_POSITION:
      return initialState;
    default:
      return state;
  }
};
export default endPointReducer;
