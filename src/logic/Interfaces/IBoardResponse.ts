import MoveEnum from "../Enums/MoveEnum";
interface IBoardResponse {
  pony: [number];
  domokun: [number];
  "end-point": [number];
  size: [number, number];
  difficulty: number;
  data: [][];
  maze_id: string;
  "game-state": {
    state: string;
    "state-result": string;
  };
}
export default IBoardResponse;
