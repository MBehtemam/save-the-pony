import { all } from "redux-saga/effects";
import { rootGameSaga } from "./GameSaga";
export default function* rootSage() {
  yield all([rootGameSaga()]);
}
