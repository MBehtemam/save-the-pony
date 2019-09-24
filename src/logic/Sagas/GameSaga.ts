import { takeLatest, put, call } from "redux-saga/effects";
import * as ActionTypes from "../Actions/ActionTypes";
import * as CustomGameActions from "../Actions/CustomGameActions";
import * as MazeActions from "../Actions/MazeActions";
import * as PonyActions from "../Actions/PonyActions";
import * as DomokunActions from "../Actions/DomokunActions";
import * as EndPointActions from "../Actions/EndPointActions";
import * as GameStateActions from "../Actions/GameStateActions";
import MazeAPI from "../Api/MazeAPI";
import ICreateMaze from "../Interfaces/ICreateMaze";
import IBoardResponse from "../Interfaces/IBoardResponse";

const mApi = new MazeAPI();
function* createGame(mazeInfo: ICreateMaze) {
  const mazeId: string = yield call(mApi.createMaze, mazeInfo);
  put(CustomGameActions.customGameSetMazeId(mazeId));
  const board: IBoardResponse = yield call(mApi.getMaze, mazeId);
  //Set Board
  put(
    MazeActions.setBoard({
      data: board.data,
      difficulty: board.difficulty,
      height: board.size[1],
      width: board.size[0]
    })
  );
  //Set Pony
  put(PonyActions.setPonyPosition(board.pony[0]));
  //Set Domokun
  put(DomokunActions.setDomokunPosition(board.domokun[0]));

  //Set End Point
  put(EndPointActions.setEndPointPosition(board["end-point"][0]));

  //Set Game Start
  if (board["game-state"].state === "active") {
    put(GameStateActions.setGameStart());
  }
}

function* createMaze(mazeId: string) {}
