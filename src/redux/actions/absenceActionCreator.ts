import { Dispatch } from "redux";
import { AbsenceManagerApi } from "../../api/rest/absenceManagerApi";
import Absence from "../../api/model/absence";
import {
  GetAbsenceStartAction,
  GetAbsenceSuccessAction,
  GetAbsenceFailAction,
  GetAbsenceByIdStartAction,
  GetAbsenceByIdSuccessAction,
  GetAbsenceByIdFailAction,
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

export const getAbsenceByIdStart = (): GetAbsenceByIdStartAction => {
  return {
    type: AbsenceActionTypes.GET_ABSENCE_BY_ID_START,
  };
};

export const getAbsenceByIdSuccess = (
  results: Absence[]
): GetAbsenceByIdSuccessAction => {
  return {
    type: AbsenceActionTypes.GET_ABSENCE_BY_ID_SUCCESS,
    absences: results,
  };
};

export const getAbsenceByIdFail = (error: string): GetAbsenceByIdFailAction => {
  return {
    type: AbsenceActionTypes.GET_ABSENCE_BY_ID_FAIL,
    error: error,
  };
};

export const getAbsences = (itemsCountPerPage: number, pageNumber: number) => {
  debugger;
  return (dispatch: Dispatch) => {
    dispatch(getAbsenceStart());
    debugger;
    return new AbsenceManagerApi()
      .getAbsence(itemsCountPerPage, pageNumber)
      .then((res) => dispatch(getAbsenceSuccess(res.data.absences)))
      .catch((error) =>
        dispatch(
          getAbsenceFail("Could not get absence record: " + error.message)
        )
      );
  };
};

export const getAbsenceById = (searchBy: string) => {
  debugger;
  return (dispatch: Dispatch) => {
    dispatch(getAbsenceStart());
    debugger;
    return new AbsenceManagerApi()
      .getAbsenceById(searchBy)
      .then((res) => dispatch(getAbsenceByIdSuccess(res.data.absences)))
      .catch((error) =>
        dispatch(
          getAbsenceByIdFail("Could not get absence record: " + error.message)
        )
      );
  };
};
