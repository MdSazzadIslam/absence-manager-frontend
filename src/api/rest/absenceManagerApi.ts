import axios, { AxiosResponse } from "axios";
import AbsenceListResponse from "../model/absenceListResponse";
import MemberListResponse from "../model/memberListResponse";
import Member from "../model/member";
import Absence from "../model/absence";

export class AbsenceManagerApi {
  private baseUrl = "http://localhost/3000/api/absencemanager";
  private membersUrl = `${this.baseUrl}/members/`;
  private absenceUrl = `${this.baseUrl}/absences/`;

  getMembers(): Promise<AxiosResponse<MemberListResponse>> {
    return axios.get<MemberListResponse>(`${this.membersUrl}`);
  }

  getAbsence(): Promise<AxiosResponse<AbsenceListResponse>> {
    return axios.get<AbsenceListResponse>(`${this.absenceUrl}`);
  }
}
