import Absence from "../../api/model/absence";

export enum AbsenceActionTypes {
  GET_ABSENCE_START = "GET_ABSENCE_START",
  GET_ABSENCE_SUCCESS = "GET_ABSENCE_SUCCESS",
  GET_ABSENCE_FAIL = "GET_ABSENCE_FAIL",

  GET_ABSENCE_BY_ID_START = "GET_ABSENCE_BY_ID_START",
  GET_ABSENCE_BY_ID_SUCCESS = "GET_ABSENCE_BY_ID_SUCCESS",
  GET_ABSENCE_BY_ID_FAIL = "GET_ABSENCE_BY_ID_FAIL",
}

export interface GetAbsenceStartAction {
  type: AbsenceActionTypes.GET_ABSENCE_START;
}
export interface GetAbsenceSuccessAction {
  type: AbsenceActionTypes.GET_ABSENCE_SUCCESS;
  absences: Absence[];
}
export interface GetAbsenceFailAction {
  type: AbsenceActionTypes.GET_ABSENCE_FAIL;
  error: string;
}

export interface GetAbsenceByIdStartAction {
  type: AbsenceActionTypes.GET_ABSENCE_BY_ID_START;
}
export interface GetAbsenceByIdSuccessAction {
  type: AbsenceActionTypes.GET_ABSENCE_BY_ID_SUCCESS;
  absences: Absence[];
}
export interface GetAbsenceByIdFailAction {
  type: AbsenceActionTypes.GET_ABSENCE_BY_ID_FAIL;
  error: string;
}

export type AbsenceListActions =
  | GetAbsenceStartAction
  | GetAbsenceSuccessAction
  | GetAbsenceFailAction
  | GetAbsenceByIdStartAction
  | GetAbsenceByIdSuccessAction
  | GetAbsenceByIdFailAction;
