import MoveEnum from "../Enums/MoveEnum";
import IDirectionResponse from "../Interfaces/IDirectionResponse";
import getMoveDirection from "../util/getMoveDirection";
describe("Tests for Get correct move direction", () => {
  let boardWidth: number;
  let boardHeight: number;
  // let interestedPosition:number;
  // let ponyPosition:number
  beforeAll(() => {
    boardHeight = 6;
    boardWidth = 6;
  });
  it("should move to West", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 2,
        interestedPosition: 1
      })
    ).toEqual({ ok: true, direction: MoveEnum.WEST });
  });

  it("should stay at same location", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 2,
        interestedPosition: 2
      })
    ).toEqual({ ok: true, direction: MoveEnum.STAY });
  });

  it("should move to east", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 2,
        interestedPosition: 3
      })
    ).toEqual({ ok: true, direction: MoveEnum.EAST });
  });

  it("should move to north", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 8,
        interestedPosition: 2
      })
    ).toEqual({ ok: true, direction: MoveEnum.NORTH });
  });

  it("should move to south", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 2,
        interestedPosition: 8
      })
    ).toEqual({ ok: true, direction: MoveEnum.SOUTH });
  });

  it("it' a bad south move", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 35,
        interestedPosition: 8
      })
    ).toHaveProperty("ok", false);
  });
  it("it' a bad west move", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 5,
        interestedPosition: 6
      })
    ).toHaveProperty("ok", false);
  });

  it("it' a bad north move", () => {
    expect(
      getMoveDirection({
        boardHeight,
        boardWidth,
        ponyPosition: 14,
        interestedPosition: 2
      })
    ).toHaveProperty("ok", false);
  });
});
