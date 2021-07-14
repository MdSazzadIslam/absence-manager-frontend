import Member from "../../api/model/member";

export default interface MemberState {
  members: Member[];
  isFetching: boolean;
  error?: string;
}
