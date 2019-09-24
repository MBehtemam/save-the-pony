import MoveEnum from "../Enums/MoveEnum";
interface IBoardResponse {
  pony: [number];
  domokun: [number];
  "end-point": [number];
  size: [number, number];
  difficulty: number;
  data: [[MoveEnum?, MoveEnum?, MoveEnum?, MoveEnum?]];
  maze_id: string;
  "game-state": {
    state: string;
    "state-result": string;
  };
}
export default IBoardResponse;
