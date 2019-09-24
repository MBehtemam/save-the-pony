import * as ActionTypes from "../Actions/ActionTypes";
import ponyReducer, { initialState } from "./ponyReducer";
import IPony from "../Interfaces/IPony";

describe("Test Case for Pony Reducer", () => {
  it("should equal to default state", () => {
    expect(ponyReducer(undefined, {})).toEqual(initialState);
  });
  it("should clear the pony from reducer", () => {
    const pony: IPony = {
      ponyName: "poniee",
      ponyPosition: 10
    };
    expect(ponyReducer(pony, { type: ActionTypes.CLEAR_PONY })).toEqual(
      initialState
    );
  });
  it("should set the complete pony object", () => {
    const pony: IPony = {
      ponyPosition: 10,
      ponyName: "poniee"
    };
    expect(
      ponyReducer(undefined, { type: ActionTypes.SET_PONY, payload: pony })
    ).toEqual(pony);
  });
});
