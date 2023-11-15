import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
