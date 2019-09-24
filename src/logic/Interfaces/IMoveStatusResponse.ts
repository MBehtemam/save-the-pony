import MoveStatusEnum from "../Enums/MoveStatus";
interface MoveStatusResponse {
  state: string;
  "state-result": MoveStatusEnum;
}
export default MoveStatusResponse;
