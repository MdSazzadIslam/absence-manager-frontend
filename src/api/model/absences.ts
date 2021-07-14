export default interface Absences {
  admitterId: null | number;
  admitterNote: string;
  confirmedAt: string | null;
  createdAt: string;
  crewId: number;
  endDate: string;
  id: number;
  memberNote: string;
  rejectedAt: null | string;
  startDate: string;
  type: string;
  userId: number;
}
