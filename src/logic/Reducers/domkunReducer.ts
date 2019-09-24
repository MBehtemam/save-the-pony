import * as ActionTypes from "../Actions/ActionTypes";
import IDomokun from "../Interfaces/IDomokun";

export const initialState: IDomokun = {
  position: -1
};
const domokunReducer = (
  state: IDomokun = initialState,
  action: any
): IDomokun => {
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
