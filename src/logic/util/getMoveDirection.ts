import MoveEnum from "../Enums/MoveEnum";
import IDirectionResponse from "../Interfaces/IDirectionResponse";
interface IProps {
  data: string[][];
  ponyPosition: number;
  interestedPosition: number;
  width: number;
}

const getMoveDirection = ({
  data,
  ponyPosition,
  interestedPosition,
  width
}: IProps): IDirectionResponse => {
  if (ponyPosition === interestedPosition) {
    return {
      ok: true,
      direction: MoveEnum.STAY
    };
  } else if (
    ponyPosition + 1 === interestedPosition &&
    !data[ponyPosition].includes("east")
  ) {
    //means east
    return {
      ok: true,
      direction: MoveEnum.EAST
    };
  } else if (
    ponyPosition - 1 === interestedPosition &&
    !data[ponyPosition].includes("west")
  ) {
    return {
      ok: true,
      direction: MoveEnum.WEST
    };
  } else if (
    ponyPosition - width === interestedPosition &&
    !data[ponyPosition].includes("north")
  ) {
    return {
      ok: true,
      direction: MoveEnum.NORTH
    };
  } else if (
    ponyPosition + width === interestedPosition &&
    !data[ponyPosition].includes("south")
  ) {
    return {
      ok: true,
      direction: MoveEnum.SOUTH
    };
  } else {
    return {
      ok: false,
      direction: MoveEnum.WRONG_MOVE
    };
  }
};
export default getMoveDirection;
