import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "redux/reducers";
import rootSaga from "redux/sagas";
import ClientService from "helpers/ClientService";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  thunk.withExtraArgument(ClientService),
  sagaMiddleware,
  logger,
];

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default store;
