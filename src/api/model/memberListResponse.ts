import Member from "./member";
export default interface MemberListResponse {
  count: number;
  next: string;
  previous: string;
  members: Member[];
}
