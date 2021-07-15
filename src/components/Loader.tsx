import { Spinner } from "react-bootstrap";
const AbsenceList: React.FC = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "50px",
        height: "50px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">...</span>
    </Spinner>
  );
};

export default AbsenceList;
