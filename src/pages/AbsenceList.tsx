import Absence from "../api/model/absence";
import AbsenceState from "../redux/state/absenceState";
import { connect } from "react-redux";
import AppState from "../redux/state/appState";
import { getAbsences } from "../redux/actions/absenceActionCreator";

interface Props {
  getAbsenceList(): void;
  absenceListState: AbsenceState;
  // deleteHandler: (id: string) => void;
}

const AbsenceList: React.FC<Props> = (props) => {
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
          <tbody> </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    absenceListState: state.absenceState,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getAbsenceList: () => dispatch(getAbsences()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbsenceList);
