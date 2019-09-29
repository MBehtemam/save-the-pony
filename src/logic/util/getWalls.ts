import MoveEnum from "../Enums/MoveEnum";
import { number } from "prop-types";

const getWalls = (data: string[][], width: number) => {
  const walls = data
    .map((position: string[], index: number) => {
      if (position.length > 0) {
        return position.map((point: string) => {
          if (point === MoveEnum.EAST) {
            return index + 1;
          } else if (point === MoveEnum.WEST) {
            return index - 1;
          } else if (point === MoveEnum.NORTH) {
            return index - width;
          } else if (point === MoveEnum.SOUTH) {
            return index + width;
          }
        });
      } else {
        return undefined;
      }
    })
    .reduce((acc: number[], val: number[]) => acc.concat(val), [])
    .filter((item: number | undefined) => item !== undefined)
    .reduce((pValue: number[], current: number) => {
      if (pValue.includes(current)) {
        return pValue;
      } else {
        return [...pValue, current];
      }
    }, []);

  return walls;
};
export default getWalls;
