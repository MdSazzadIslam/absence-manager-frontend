import { combineReducers } from "redux";
import AppState from "../state/appState";
import memberReducer from "./memberReducer";
import absenceReducer from "./absenceReducer";
const rootReducer = combineReducers<AppState>({
  memberState: memberReducer,
  absenceState: absenceReducer,
});

export default rootReducer;
