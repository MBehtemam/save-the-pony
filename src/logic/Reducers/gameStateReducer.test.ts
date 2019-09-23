import * as ActionTypes from "../Actions/ActionTypes";
import GameState from "../Enums/GemeState";
import gameStateReducer, { initialState } from "./gameStateReducer";

describe("Test suits for Game state reducer", () => {
  it("should stop the game", () => {
    expect(
      gameStateReducer(undefined, { type: ActionTypes.SET_GAME_STATE_STOP })
    ).toEqual(GameState.STOP);
  });
  it("win the game", () => {
    expect(
      gameStateReducer(undefined, { type: ActionTypes.SET_GAME_STATE_WIN })
    ).toEqual(GameState.WIN);
  });

  it("game is started", () => {
    expect(
      gameStateReducer(undefined, { type: ActionTypes.SET_GAME_STATE_START })
    ).toEqual(GameState.START);
  });

  it("gameover , loose the game", () => {
    expect(
      gameStateReducer(undefined, { type: ActionTypes.SET_GAME_STATE_LOOSE })
    ).toEqual(GameState.LOOSE);
  });
});
