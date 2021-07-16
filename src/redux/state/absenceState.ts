import Absence from "../../api/model/absence";

export default interface AbsenceState {
  absences: Absence[];
  isFetching: boolean;
  error?: string;
}
