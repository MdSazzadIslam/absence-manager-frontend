export default interface Absence {
  admitterId: null | number; //union type cause i found null and number both absence.json file
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
  name: string;
  image: string;
}
