import getWalls from "./getWalls";

describe("Test suits for getWalls()", () => {
  it("should had correct walls number", () => {
    const width = 4;

    const data = [
      ["west", "north"], // 0 -1  -4
      ["west", "north"], //1  0   -3
      ["north"], // 2   -2
      ["west", "north"], // 3 2 -1
      ["north"], // 4  0
      ["north"], // 5   1
      ["north"], // 6   2
      ["north"], // 7   3
      ["west", "north"], // 8  7  4
      ["north"], // 9 5
      ["north"], // 10  6
      ["west", "north"], // 11   10  7
      ["north"], // 12  8
      [], // 13
      [], // 14
      ["north"] // 15 11
    ];
    const walls = [2, 1, 3, 7, 4, 5, 6, 10, 8, 11];
    expect(getWalls(data, width)).toEqual(walls);
  });
  it("should return empty array", () => {
    const data: string[][] = [];
    const walls: number[] = [];
    const width = 4;
    expect(getWalls(data, width)).toEqual(walls);
  });
});
