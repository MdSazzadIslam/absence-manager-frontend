import Absence from "../api/model/absence";
import moment from "moment";

type PropsType = {
  absences: Absence[];
};
const ListRow: React.FC<PropsType> = (props) => {
  const { absences } = props;
  const absenceData = absences.map((absence, index) => {
    const confimed = absence.confirmedAt;
    const rejected = absence.rejectedAt;
    const requested = absence.createdAt;
    let status = "";

    if (rejected != null) {
      status = "Rejected";
    }
    if (confimed != null) {
      status = "Confirmed";
    }
    if (requested != null && confimed == null && rejected == null) {
      status = "Requested";
    }
    return (
      <tr key={absence.id}>
        <td>{index + 1}</td>
        <td>{absence.name}</td>
        <td>
          <img src={absence.image} width={50} height={50} alt="logo" />
        </td>
        <td>{absence.type}</td>
        <td>{moment(absence.startDate).format("YYYY-MM-DD")}</td>
        <td>{moment(absence.endDate).format("YYYY-MM-DD")}</td>
        <td>{absence.admitterNote}</td>
        <td>{status}</td>
        <td>{absence.memberNote}</td>
        <td>{absence.admitterId}</td>
        <td>{moment(absence.confirmedAt).format("YYYY-MM-DD")}</td>
        <td>{moment(absence.createdAt).format("YYYY-MM-DD")}</td>
        <td>{absence.crewId}</td>
        <td>{absence.id}</td>
        <td>{moment(absence.rejectedAt).format("YYYY-MM-DD")}</td>
        <td>{absence.userId}</td>
      </tr>
    );
  });

  return <>{absenceData}</>;
};

export default ListRow;
