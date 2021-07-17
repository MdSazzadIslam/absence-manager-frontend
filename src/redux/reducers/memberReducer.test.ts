import {
  getMemberStart,
  getMemberSuccess,
  getMemberFail,
} from "./../actions/memberActionCreator";
import MemberState from "../state/memberState";
import memberReducer from "./memberReducer";
import getMemberMock from "../../api/rest/getMemberMock";

const initialState: MemberState = {
  members: [],
  isFetching: false,
};

describe("memberReducer action type responses for", () => {
  describe("getMemberStart", () => {
    const action = getMemberStart();
    const newState = memberReducer(initialState, action);

    it("is fetching", () => expect(newState.isFetching).toBe(true));
  });

  describe("getMemberSuccess", () => {
    const results = getMemberMock;
    const action = getMemberSuccess(results);
    const newState = memberReducer(initialState, action);

    it("fetched member records", () =>
      expect(newState.members).toEqual(getMemberMock));
    it("is not fetching", () => expect(newState.isFetching).toBe(false));
  });

  describe("getMemberFail", () => {
    const action = getMemberFail("error");
    const newState = memberReducer(initialState, action);

    it("has not fetched member records", () =>
      expect(newState.members).toEqual([]));
    it("is not fetching", () => expect(newState.isFetching).toBe(false));
    it("is has error", () => expect(newState.error).toBe("error"));
  });
});
