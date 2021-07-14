import axios, { AxiosResponse } from "axios";
import Members from "../model/members";
import Absences from "../model/absences";

export class AbsenceManagerApi {
  private baseUrl = "http://localhost/3000/api/absencemanager";
  private membersUrl = `${this.baseUrl}/members/`;
  private absenceUrl = `${this.baseUrl}/absences/`;

  getMembers(): Promise<AxiosResponse<Members>> {
    return axios.get<Members>(`${this.membersUrl}`);
  }

  getAbsence(): Promise<AxiosResponse<Absences>> {
    return axios.get<Absences>(`${this.absenceUrl}`);
  }
}
