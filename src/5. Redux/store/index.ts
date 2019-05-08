import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { RootReducerState } from "./ducks";

const middleware = [logger];

function configureStore(initialState: Partial<RootReducerState> = {}) {
  const store: any = createStore(rootReducer, initialState, applyMiddleware(...middleware));
  return store;
}

export default configureStore;