import axios from "axios";
import { AbsenceManagerApi } from "./absenceManagerApi";

describe("AbsenceManagerApi", () => {
  const api = new AbsenceManagerApi();
  beforeEach(() => (axios.get = jest.fn()));

  it("getAbsence", () => {
    const limit = 10;
    const page = 1;
    api.getAbsence(limit, page);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5000/api/v1/absence/" +
        "?page=" +
        `${page}` +
        "&limit=" +
        `${limit}`
    );
  });

  it("getAbsenceById", () => {
    const searchBy = "vacation";
    api.getAbsenceById(searchBy);
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:5000/api/v1/absence/${searchBy}`
    );
  });

  it("getMembers", () => {
    api.getMembers();
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5000/api/v1/member"
    );
  });
});
