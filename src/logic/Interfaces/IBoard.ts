import MoveEnum from "../Enums/MoveEnum";
interface IBoard {
  width: number;
  height: number;
  difficulty: number;
  data: []; //[[MoveEnum?, MoveEnum?, MoveEnum?, MoveEnum?]];
}
export default IBoard;
