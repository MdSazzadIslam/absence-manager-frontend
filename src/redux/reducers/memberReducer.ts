import { Reducer } from "redux";
import MemberState from "../state/memberState";
import { MemberActionTypes, MemberListActions } from "../actions/memberAction";

const initialState: MemberState = {
  members: [],
  isFetching: false,
};

const memberReducer: Reducer<MemberState, MemberListActions> = (
  state = initialState,
  action: MemberListActions
) => {
  switch (action.type) {
    case MemberActionTypes.GET_MEMBER_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case MemberActionTypes.GET_MEMBER_SUCCESS: {
      debugger;
      return {
        ...state,
        members: action.members,
        isFetching: false,
      };
    }

    case MemberActionTypes.GET_MEMBER_FAIL: {
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

export default memberReducer;
