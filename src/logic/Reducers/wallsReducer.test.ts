import * as ActionTypes from "../Actions/ActionTypes";
import wallsReducer, { initialState } from "./wallsReducer";

describe("Test suits for wallsReducer", () => {
  it("should have empty array at first", () => {
    expect(wallsReducer(undefined, { type: "", payload: null })).toHaveLength(
      0
    );
  });
  it("should set the walls", () => {
    expect(
      wallsReducer(undefined, {
        type: ActionTypes.SET_WALLS,
        payload: [1, 2, 3]
      })
    ).toHaveLength(3);
  });
  it("should clear the walls", () => {
    expect(
      wallsReducer([1, 2, 3], { type: ActionTypes.CLEAR_WALLS, payload: null })
    ).toHaveLength(0);
  });
});
