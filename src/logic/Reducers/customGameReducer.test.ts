import * as ActionTypes from "../Actions/ActionTypes";
import ICustomGame from "../Interfaces/ICustomGame";
import customGameReducer, { initialState } from "./customGameReducer";

describe("Test suits for custom game creating", () => {
  it("should equal to initial state", () => {
    expect(customGameReducer(undefined, { type: "", payload: "" })).toEqual(
      initialState
    );
  });

  it("should set the height", () => {
    const height: number = 10;
    const newState: ICustomGame = {
      ...initialState,
      height
    };
    expect(
      customGameReducer(undefined, {
        type: ActionTypes.CUSTOM_GAME_SET_HEIGHT,
        payload: height
      })
    ).toEqual(newState);
  });

  it("should set the width", () => {
    const width: number = 10;
    const newState: ICustomGame = {
      ...initialState,
      width
    };
    expect(
      customGameReducer(undefined, {
        type: ActionTypes.CUSTOM_GAME_SET_WIDTH,
        payload: width
      })
    ).toEqual(newState);
  });

  it("should set the pony name", () => {
    const ponyName = "poniee";
    const newState: ICustomGame = {
      ...initialState,
      ponyName
    };
    expect(
      customGameReducer(undefined, {
        type: ActionTypes.CUSTOM_GAME_SET_PONY_NAME,
        payload: ponyName
      })
    ).toEqual(newState);
  });

  it("should set the whole custome game", () => {
    const newState: ICustomGame = {
      width: 15,
      height: 15,
      ponyName: "poniee"
    };
    expect(
      customGameReducer(undefined, {
        type: ActionTypes.CUSTOM_GAME_SET,
        payload: newState
      })
    ).toEqual(newState);
  });
  it("should clear the whole state", () => {
    const newState: ICustomGame = {
      width: 15,
      height: 15,
      ponyName: "poniee"
    };
    expect(
      customGameReducer(undefined, {
        type: ActionTypes.CLEAR_CUSTOM_GAME,
        payload: newState
      })
    ).toEqual(initialState);
  });
});
