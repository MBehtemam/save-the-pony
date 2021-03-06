import * as ActionTypes from "../Actions/ActionTypes";
import endPointReducer, { initialState } from "./endPointReducer";
import IEndPoint from "../Interfaces/IEndPoint";
describe("Test suits for end point reudcer", () => {
  it("should set the end point", () => {
    const state: IEndPoint = {
      position: 10
    };
    expect(
      endPointReducer(undefined, {
        type: ActionTypes.SET_END_POINT_POSITION,
        payload: state.position
      })
    ).toEqual(state);
  });
  it("should clear the postion", () => {
    const state: IEndPoint = {
      position: 10
    };
    expect(
      endPointReducer(state, { type: ActionTypes.CLEAR_END_POINT_POSITION })
    ).toEqual(initialState);
  });

  it("should equal to defualt state", () => {
    expect(endPointReducer(undefined, {})).toEqual(initialState);
  });
});
