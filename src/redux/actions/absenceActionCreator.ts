import { Dispatch } from "redux";
import { AbsenceManagerApi } from "../../api/rest/absenceManagerApi";
import Absence from "../../api/model/absence";
import {
  GetAbsenceStartAction,
  GetAbsenceSuccessAction,
  GetAbsenceFailAction,
  AbsenceActionTypes,
} from "./absenceAction";

export const getAbsenceStart = (): GetAbsenceStartAction => {
  return {
    type: AbsenceActionTypes.GET_ABSENCE_START,
  };
};

export const getAbsenceSuccess = (
  results: Absence[]
): GetAbsenceSuccessAction => {
  return {
    type: AbsenceActionTypes.GET_ABSENCE_SUCCESS,
    absences: results,
  };
};

export const getAbsenceFail = (error: string): GetAbsenceFailAction => {
  return {
    type: AbsenceActionTypes.GET_ABSENCE_FAIL,
    error: error,
  };
};

export const getAbsences = () => {
  return (dispatch: Dispatch) => {
    dispatch(getAbsenceStart());
    return new AbsenceManagerApi()
      .getAbsence()
      .then((response) => dispatch(getAbsenceSuccess(response.data.results)))
      .catch((error) =>
        dispatch(
          getAbsenceFail("Could not get absence record: " + error.message)
        )
      );
  };
};
