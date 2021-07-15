import { Reducer } from "redux";
import AbsenceState from "../state/absenceState";
import {
  AbsenceActionTypes,
  AbsenceListActions,
} from "../actions/absenceAction";

const initialState: AbsenceState = {
  absences: [],
  isFetching: false,
};

const absenceReducer: Reducer<AbsenceState, AbsenceListActions> = (
  state = initialState,
  action: AbsenceListActions
) => {
  switch (action.type) {
    case AbsenceActionTypes.GET_ABSENCE_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case AbsenceActionTypes.GET_ABSENCE_SUCCESS: {
      return {
        ...state,
        absences: action.absences,
        isFetching: false,
      };
    }

    case AbsenceActionTypes.GET_ABSENCE_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default absenceReducer;
