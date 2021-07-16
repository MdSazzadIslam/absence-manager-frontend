import Absence from "./absence";
export default interface AbsenceListResponse {
  count: number;
  next: string;
  previous: string;
  absences: Absence[];
}
