import React, { useEffect } from "react";
import Absence from "../api/model/absence";
import AbsenceState from "../redux/state/absenceState";
import { connect } from "react-redux";
import AppState from "../redux/state/appState";
import { getAbsences } from "../redux/actions/absenceActionCreator";

interface Props {
  absences: Absence[];
  getAbsences(): void;
  absenceState: AbsenceState;
  // deleteHandler: (id: string) => void;
}

const AbsenceList: React.FC<Props> = ({
  absences,
  getAbsences,
  absenceState,
}) => {
  useEffect(() => {
    getAbsences();
    console.log(absenceState);
    console.log(absences);
  }, []);
  return (
    <div className="row justify-content-center">
      <h3>Absence List</h3>
      <div className="col-auto">
        <table className="table table-responsive">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Established</th>
              <th scope="col">Head Quaters</th>

              <th scope="col">Name</th>
              <th scope="col">Slogan</th>
              <th scope="col">Website</th>
              <th scope="col">Trips</th>
            </tr>
          </thead>
          <tbody>
            {/* {absences.map((absence) => (
              <tr>
                <td>{absence.id}</td>
                <td>{absence.admitterId}</td>
                <td>{absence.admitterNote}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    absenceState: state.absenceState,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getAbsences: () => dispatch(getAbsences()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbsenceList);
