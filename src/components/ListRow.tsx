import Absence from "../api/model/absence";

interface Props {
  absences: Absence[];
  // deleteHandler: (id: string) => void;
}
const ListRow: React.FC<Props> = (props) => {
  const { absences } = props;
  const absenceData = absences.map((absence) => {
    return (
      <tr key={absence.id}>
        <td>{absence.admitterId}</td>
        <td>{absence.admitterNote}</td>
        <td>{absence.confirmedAt}</td>
        <td>{absence.createdAt}</td>

        <td>{absence.crewId}</td>
        <td>{absence.endDate}</td>
        <td>{absence.id}</td>
        <td>{absence.memberNote}</td>

        <td>{absence.rejectedAt}</td>
        <td>{absence.startDate}</td>
        <td>{absence.type}</td>
        <td>{absence.userId}</td>
      </tr>
    );
  });

  return <>{absenceData}</>;
};

export default ListRow;
