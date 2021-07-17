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
      debugger;

      let absenceData: any = action.absences[0];
      let memberData: any = action.absences[1];

      if (absenceData.length > 0 && memberData.length > 0) {
        for (let i: number = 0; i < absenceData.length; i++) {
          memberData.filter(function (elm: any) {
            if (elm.userId === absenceData[i].userId) {
              let name: string = elm.name;
              let image: string = elm.image;
              absenceData[i].name = name;
              absenceData[i].image = image;
            }
            return absenceData;
          });
        }
      }

      return {
        ...state,
        absences: absenceData,
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

    case AbsenceActionTypes.GET_ABSENCE_BY_ID_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case AbsenceActionTypes.GET_ABSENCE_BY_ID_SUCCESS: {
      debugger;

      let absenceData: any = action.absences[0];
      let memberData: any = action.absences[1];

      if (absenceData.length > 0 && memberData.length > 0) {
        for (let i: number = 0; i < absenceData.length; i++) {
          memberData.filter(function (elm: any) {
            if (elm.userId === absenceData[i].userId) {
              let name: string = elm.name;
              let image: string = elm.image;
              absenceData[i].name = name;
              absenceData[i].image = image;
            }
            return absenceData;
          });
        }
      }

      return {
        ...state,
        absences: absenceData,
        isFetching: false,
      };
    }

    case AbsenceActionTypes.GET_ABSENCE_BY_ID_FAIL: {
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
