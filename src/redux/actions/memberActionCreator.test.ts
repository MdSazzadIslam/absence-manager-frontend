import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import getMemberMock from "../../api/rest/getMemberMock";

import {
  getMembers,
  getMemberStart,
  getMemberSuccess,
} from "./memberActionCreator";
import { MemberActionTypes } from "./memberAction";

const mockStore = configureMockStore([thunk]);

describe("getMembers", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it(`creates ${MemberActionTypes.GET_MEMBER_START}, ${MemberActionTypes.GET_MEMBER_SUCCESS} after successfuly fetching members`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: getMemberMock },
      });
    });

    const expectedActions = [getMemberStart(), getMemberSuccess(getMemberMock)];

    const initialState = {
      characters: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    return store
      .dispatch<any>(getMembers())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it(`creates ${MemberActionTypes.GET_MEMBER_START}, ${MemberActionTypes.GET_MEMBER_SUCCESS} after failing to fetch members`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
      });
    });

    const store = mockStore({ characters: [] });

    return store.dispatch<any>(getMembers()).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);

      const getMemberStartAction = actions[0];
      expect(getMemberStartAction.type).toBe(
        MemberActionTypes.GET_MEMBER_START
      );

      const getMemberFailureAction = actions[1];
      expect(getMemberFailureAction.type).toBe(
        MemberActionTypes.GET_MEMBER_FAIL
      );
      expect(getMemberFailureAction.error).not.toBe(null);
      expect(getMemberFailureAction.error).toBeDefined();
    });
  });
});
