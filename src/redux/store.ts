import { applyMiddleware, createStore, Store, AnyAction } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AppState from "./state/appState";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
}
