import * as ActionTypes from "../Actions/ActionTypes";
export interface IState {
  position: number;
}
export const initialState: IState = {
  position: -1
};
const domokunReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case ActionTypes.SET_DOMOKUN_POSITION:
      return {
        position: action.payload
      };
    case ActionTypes.CLEAR_DOMOKUN_POSITION:
      return initialState;
    default:
      return state;
  }
};
export default domokunReducer;
