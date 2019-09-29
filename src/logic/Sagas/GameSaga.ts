import { takeEvery, put, call, select } from "redux-saga/effects";
import * as ActionTypes from "../Actions/ActionTypes";
import * as CustomGameActions from "../Actions/CustomGameActions";
import * as MazeActions from "../Actions/MazeActions";
import * as PonyActions from "../Actions/PonyActions";
import * as DomokunActions from "../Actions/DomokunActions";
import * as EndPointActions from "../Actions/EndPointActions";
import * as GameStateActions from "../Actions/GameStateActions";
import * as GameScreenActions from "../Actions/GameScreenActions";
import * as WallsActions from "../Actions/WallsAction";
import MazeAPI from "../Api/MazeAPI";
import ICreateMaze from "../Interfaces/ICreateMaze";
import IBoardResponse from "../Interfaces/IBoardResponse";
import IDirectionResponse from "../Interfaces/IDirectionResponse";
import getMoveDirection from "../util/getMoveDirection";
import getBoardWidth from "./selectors/getBoardWidth";
import getBoardHeight from "./selectors/getBoardHeight";
import getMazeInfo from "./selectors/getMazeInfo";
import getMaezeId from "./selectors/getMazeId";
import getPonyPosition from "./selectors/getPonyPosition";
import IMove from "../Interfaces/IMove";
import IMoveStatusResponse from "../Interfaces/IMoveStatusResponse";
import MoveStatus from "../Enums/MoveStatus";
import GameScreen from "../Enums/GameScreenEnum";
import GetWalls from "../util/getWalls";

const mApi = new MazeAPI();

function* createGame() {
  const info = yield select(getMazeInfo);
  const mazeInfo: ICreateMaze = {
    "maze-height": parseInt(info.height, 10),
    "maze-width": parseInt(info.width, 10),
    "maze-player-name": info.ponyName
  };
  const mazeId: string = yield call(mApi.createMaze, mazeInfo);
  //Setting Maze Id
  yield put(CustomGameActions.customGameSetMazeId(mazeId));

  //Setting Player Name
  yield put(PonyActions.setPonyName(mazeInfo["maze-player-name"]));
  const board: IBoardResponse = yield call(mApi.getMaze, mazeId);
  //Set Board
  yield put(
    MazeActions.setBoard({
      data: board.data,
      difficulty: board.difficulty,
      height: board.size[1],
      width: board.size[0]
    })
  );
  //Set Pony
  yield put(PonyActions.setPonyPosition(board.pony[0]));
  //Set Domokun
  yield put(DomokunActions.setDomokunPosition(board.domokun[0]));

  //Set End Point
  yield put(EndPointActions.setEndPointPosition(board["end-point"][0]));

  //Set Game Start
  if (board["game-state"].state === "Active") {
    yield put(GameStateActions.setGameStart());
    yield put(GameScreenActions.setGameScreen(GameScreen.GAME));
    yield put(WallsActions.setWalls(GetWalls(board.data, board.size[0])));
  }
}

function* MovePony(interestedPosition: number) {
  const mazeId: string = yield select(getMaezeId);
  const boardWidth = yield select(getBoardWidth);
  const boardHeight = yield select(getBoardHeight);
  const ponyPosition = yield select(getPonyPosition);
  const moveDirection: IDirectionResponse = getMoveDirection({
    boardHeight,
    boardWidth,
    ponyPosition,
    interestedPosition
  });
  if (moveDirection.ok) {
    const moveInfo: IMove = { direction: moveDirection.direction };
    const moveResult: IMoveStatusResponse = yield call(mApi.Move, {
      mazeId,
      moveInfo
    });
    if (moveResult["state-result"] === MoveStatus.ACCEPTED) {
      put(PonyActions.setPonyPosition(interestedPosition));
    }
  } else {
    //raise some action for bad selecting
  }
}

export function* rootGameSaga() {
  yield takeEvery(ActionTypes.CUSTOM_GAME_CREATE, createGame);
}
