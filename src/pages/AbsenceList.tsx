import React, { useEffect } from "react";
import Absence from "../api/model/absence";
import AbsenceState from "../redux/state/absenceState";
import { connect } from "react-redux";
import AppState from "../redux/state/appState";
import { getAbsences } from "../redux/actions/absenceActionCreator";
import Loader from "../components/Loader";
import ListRow from "../components/ListRow";
import "./AbsenceList.css";
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (absenceState.isFetching) {
    return <Loader />;
  }
  if (absenceState.error) {
    return <h5>something went wrong</h5>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-md-offset-1">
          <div className="table table-responsive">
            <div className="panel-heading">
              <div className="row">
                <div className="col col-xs-6">
                  <h3 className="panel-title">Absence List</h3>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <table className="table table-striped table-bordered table-list">
                <thead>
                  <tr>
                    <th>Admitter Id</th>
                    <th>Admitter Note</th>
                    <th>Confirmed At</th>

                    <th>Created At</th>
                    <th>Crew Id</th>
                    <th>End Date</th>
                    <th>Id</th>

                    <th>MemberNote</th>
                    <th>Rejected At</th>
                    <th>Start Date</th>
                    <th>Type</th>
                    <th>UserId</th>
                  </tr>
                </thead>
                <tbody>
                  <ListRow absences={absenceState.absences} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
