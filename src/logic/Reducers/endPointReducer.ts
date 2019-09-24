import * as ActionTypes from "../Actions/ActionTypes";
import IEndPoint from "../Interfaces/IEndPoint";

export const initialState: IEndPoint = {
  position: -1
};
const endPointReducer = (
  state: IEndPoint = initialState,
  action: any
): IEndPoint => {
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
