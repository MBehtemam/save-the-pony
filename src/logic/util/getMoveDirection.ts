import MoveEnum from "../Enums/MoveEnum";
import IDirectionResponse from "../Interfaces/IDirectionResponse";
interface IProps {
  boardWidth: number;
  boardHeight: number;
  ponyPosition: number;
  interestedPosition: number;
}

const getMoveDirection = ({
  boardHeight,
  boardWidth,
  interestedPosition,
  ponyPosition
}: IProps): IDirectionResponse => {
  const total = boardHeight * boardWidth;
  const hasNorth = ponyPosition >= boardWidth;
  const hasEast = (ponyPosition + 1) % boardWidth !== 0;
  const hasWest = (ponyPosition + 1) % boardWidth !== 0;
  const hasSouth = ponyPosition < total - boardWidth;
  const inTheSameRow =
    ponyPosition - interestedPosition <= boardWidth ||
    interestedPosition - ponyPosition <= boardWidth;
  if (interestedPosition === ponyPosition) {
    return {
      ok: true,
      direction: MoveEnum.STAY
    };
  } else if (hasSouth && ponyPosition + boardWidth === interestedPosition) {
    return {
      ok: true,
      direction: MoveEnum.SOUTH
    };
  } else if (hasNorth && ponyPosition - boardWidth === interestedPosition) {
    return {
      ok: true,
      direction: MoveEnum.NORTH
    };
  } else if (
    hasWest &&
    inTheSameRow &&
    ponyPosition - 1 === interestedPosition
  ) {
    return {
      ok: true,
      direction: MoveEnum.WEST
    };
  } else if (
    hasEast &&
    inTheSameRow &&
    ponyPosition + 1 === interestedPosition
  ) {
    return {
      ok: true,
      direction: MoveEnum.EAST
    };
  }
  return {
    ok: false,
    direction: MoveEnum.WRONG_MOVE
  };
};
export default getMoveDirection;
