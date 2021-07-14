import Absences from "../../api/model/absence";

export default interface AbsenceState {
  absences: Absences[];
  isFetching: boolean;
  error?: string;
}
