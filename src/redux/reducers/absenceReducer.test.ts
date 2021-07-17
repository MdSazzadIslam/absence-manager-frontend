import {
  getAbsenceStart,
  getAbsenceSuccess,
  getAbsenceFail,
} from "./../actions/absenceActionCreator";
import AbsenceState from "../state/absenceState";
import absenceReducer from "./absenceReducer";
import getAbsenceMock from "../../api/rest/getAbsenceMock";

const initialState: AbsenceState = {
  absences: [],
  isFetching: false,
};

describe("absenceReducer action type responses for", () => {
  describe("getAbsenceStart", () => {
    const action = getAbsenceStart();
    const newState = absenceReducer(initialState, action);

    it("is fetching", () => expect(newState.isFetching).toBe(true));
  });

  describe("getAbsenceSuccess", () => {
    const results = getAbsenceMock;
    const action = getAbsenceSuccess(results);
    const newState = absenceReducer(initialState, action);

    it("fetched absences records", () =>
      expect(newState.absences).toEqual(getAbsenceMock));
    it("is not fetching", () => expect(newState.isFetching).toBe(false));
  });

  describe("getAbsenceFail", () => {
    const action = getAbsenceFail("error");
    const newState = absenceReducer(initialState, action);

    it("has not fetched absence records", () =>
      expect(newState.absences).toEqual([]));
    it("is not fetching", () => expect(newState.isFetching).toBe(false));
    it("is has error", () => expect(newState.error).toBe("error"));
  });
});
