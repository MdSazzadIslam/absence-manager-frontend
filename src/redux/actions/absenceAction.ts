import Absence from "../../api/model/absence";

export enum AbsenceActionTypes {
  GET_ABSENCE_START = "GET_ABSENCE_START",
  GET_ABSENCE_SUCCESS = "GET_ABSENCE_SUCCESS",
  GET_ABSENCE_FAIL = "GET_ABSENCE_FAIL",
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

export type AbsenceListActions =
  | GetAbsenceStartAction
  | GetAbsenceSuccessAction
  | GetAbsenceFailAction;
