import * as ActionTypes from "../Actions/ActionTypes";
import IBoard from "../Interfaces/IBoard";
import boardReducer, { initialState } from "./boardReducer";

describe("Test suits form board reducer", () => {
  it("should set the board", () => {
    const board: IBoard = {
      width: 15,
      height: 15,
      difficulty: 0,
      data: []
    };
    expect(
      boardReducer(undefined, { type: ActionTypes.SET_BOARD, payload: board })
    ).toEqual(board);
  });
  it("should equal to initial state", () => {
    expect(boardReducer(undefined, {})).toEqual(initialState);
  });
  it("should clear the board", () => {
    const board: IBoard = {
      width: 15,
      height: 15,
      difficulty: 0,
      data: []
    };
    expect(boardReducer(board, { type: ActionTypes.CLEAR_BOARD })).toEqual(
      initialState
    );
  });
});
