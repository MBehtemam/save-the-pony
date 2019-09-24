import { createStore, applyMiddleware, compose } from "redux";
import createReduxSagaMiddleware from "redux-saga";
import IWindow from "../Interfaces/IWindow";
import rootReducers from "../Reducers";
import rootSaga from "../Sagas";
const saga = createReduxSagaMiddleware();

const _window: IWindow = window;
saga.run(rootSaga);
const composeEnhancers =
  _window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(saga))
);
export default store;
