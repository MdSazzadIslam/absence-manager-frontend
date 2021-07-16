import Absence from "../api/model/absence";
import moment from "moment";

interface Props {
  absences: Absence[];
  // deleteHandler: (id: string) => void;
}
const ListRow: React.FC<Props> = (props) => {
  const { absences } = props;
  const absenceData = absences.map((absence, index) => {
    return (
      <tr key={absence.id}>
        <td>{index}</td>
        <td>{absence.name}</td>
        <td>
          <img src={absence.image} width={50} height={50} alt="logo" />
        </td>
        <td>{absence.admitterId}</td>
        <td>{absence.admitterNote}</td>
        <td>{moment(absence.confirmedAt).format("DD/MM/YYYY")}</td>
        <td>{moment(absence.createdAt).format("DD/MM/YYYY")}</td>

        <td>{absence.crewId}</td>
        <td>{moment(absence.endDate).format("DD/MM/YYYY")}</td>
        <td>{absence.id}</td>
        <td>{absence.memberNote}</td>

        <td>{moment(absence.rejectedAt).format("DD/MM/YYYY")}</td>
        <td>{moment(absence.startDate).format("DD/MM/YYYY")}</td>
        <td>{absence.type}</td>
        <td>{absence.userId}</td>
      </tr>
    );
  });

  return <>{absenceData}</>;
};

export default ListRow;
