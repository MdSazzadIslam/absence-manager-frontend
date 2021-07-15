import Absence from "../api/model/absence";

interface Props {
  absences: Absence[];
  // deleteHandler: (id: string) => void;
}
const Row: React.FC<Props> = (props) => {
  const { absences } = props;
  const absenceData = absences.map((absence) => {
    return (
      <tr key={absence.id}>
        <td>{absence.admitterId}</td>
        <td>{absence.admitterNote}</td>
      </tr>
    );
  });

  return <>{absenceData}</>;
};

export default Row;
