import { Dispatch } from "redux";
import { AbsenceManagerApi } from "../../api/rest/absenceManagerApi";
import Member from "../../api/model/member";
import {
  GetMemberStartAction,
  GetMemberSuccessAction,
  GetMemberFailAction,
  MemberActionTypes,
} from "./memberAction";

export const getMemberStart = (): GetMemberStartAction => {
  return {
    type: MemberActionTypes.GET_MEMBER_START,
  };
};

export const getMemberSuccess = (results: Member[]): GetMemberSuccessAction => {
  return {
    type: MemberActionTypes.GET_MEMBER_SUCCESS,
    members: results,
  };
};

export const getMemberFail = (error: string): GetMemberFailAction => {
  return {
    type: MemberActionTypes.GET_MEMBER_FAIL,
    error: error,
  };
};

export const getCharacters = () => {
  return (dispatch: Dispatch) => {
    dispatch(getMemberStart());
    return new AbsenceManagerApi()
      .getMembers()
      .then((response) => dispatch(getMemberSuccess(response.data.results)))
      .catch((error) =>
        dispatch(getMemberFail("Could not get members: " + error.message))
      );
  };
};
