import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import createReduxSagaMiddleware from "redux-saga";
import IWindow from "../Interfaces/IWindow";
import rootReducers from "../Reducers";
import rootSaga from "../Sagas";
const saga = createReduxSagaMiddleware();

const _window: IWindow = window;

const CreateStore = (): any => {
  const composeEnhancers =
    _window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(saga))
  );
  saga.run(rootSaga);
  return store;
};
export default CreateStore;
