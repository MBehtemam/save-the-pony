import * as ActionTypes from "../Actions/ActionTypes";
import domokunReducer, { initialState } from "./domkunReducer";
import IDomokun from "../Interfaces/IDomokun";
describe("Test suits for domokun reudcer", () => {
  it("should set the position", () => {
    const state: IDomokun = {
      position: 10
    };
    expect(
      domokunReducer(undefined, {
        type: ActionTypes.SET_DOMOKUN_POSITION,
        payload: state.position
      })
    ).toEqual(state);
  });
  it("should clear the position of domokun", () => {
    const state: IDomokun = {
      position: 100
    };
    expect(
      domokunReducer(state, { type: ActionTypes.CLEAR_DOMOKUN_POSITION })
    ).toEqual(initialState);
  });
});
