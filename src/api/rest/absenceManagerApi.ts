import axios, { AxiosResponse } from "axios";
import AbsenceListResponse from "../model/absenceListResponse";
import MemberListResponse from "../model/memberListResponse";

export class AbsenceManagerApi {
  private baseUrl = process.env.REACT_APP_API_URL;
  private membersUrl = `${this.baseUrl}/member`;
  private absenceUrl = `${this.baseUrl}/absence`;

  getMembers(): Promise<AxiosResponse<MemberListResponse>> {
    return axios.get<MemberListResponse>(`${this.membersUrl}  `);
  }

  getAbsence(
    limit: number,
    page: number
  ): Promise<AxiosResponse<AbsenceListResponse>> {
    return axios.get<AbsenceListResponse>(
      `${this.absenceUrl}` + "?page=" + `${page}` + "&limit=" + `${limit}`
    );
  }

  getAbsenceById(
    searchBy: string
  ): Promise<AxiosResponse<AbsenceListResponse>> {
    return axios.get<AbsenceListResponse>(
      `${this.absenceUrl}` + "/" + `${searchBy}`
    );
  }
}
