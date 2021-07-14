import Member from "../../api/model/member";

export enum MemberActionTypes {
  GET_MEMBER_START = "GET_MEMBER_START",
  GET_MEMBER_SUCCESS = "GET_MEMBER_SUCCESS",
  GET_MEMBER_FAIL = "GET_MEMBER_FAIL",
}

export interface GetMemberStartAction {
  type: MemberActionTypes.GET_MEMBER_START;
}
export interface GetMemberSuccessAction {
  type: MemberActionTypes.GET_MEMBER_SUCCESS;
  members: Member[];
}
export interface GetMemberFailAction {
  type: MemberActionTypes.GET_MEMBER_FAIL;
  error: string;
}

export type MemberListActions =
  | GetMemberStartAction
  | GetMemberSuccessAction
  | GetMemberFailAction;
