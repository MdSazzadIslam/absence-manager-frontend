import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
  AnyAction,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AppState from "./state/appState";
import memberReducer from "./reducers/memberReducer";

const rootReducer = combineReducers<AppState>({
  memberState: memberReducer,
});

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
