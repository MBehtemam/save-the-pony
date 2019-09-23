import MoveEnum from "../Enums/MoveEnum";
interface IBoard {
  width: number;
  height: number;
  difficulty: number;
  data: MoveEnum[];
}
export default IBoard;
