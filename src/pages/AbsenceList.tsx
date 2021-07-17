import React, { useEffect, useState } from "react";
import Absence from "../api/model/absence";
import AbsenceState from "../redux/state/absenceState";
import { connect } from "react-redux";
import AppState from "../redux/state/appState";
import { getAbsences } from "../redux/actions/absenceActionCreator";
import Loader from "../components/Loader";
import ListRow from "../components/ListRow";
import Pagination from "react-js-pagination";
import "./AbsenceList.css";

interface Props {
  absences: Absence[];
  getAbsences(itemsCountPerPage: number, pageNumber: number): void;
  absenceState: AbsenceState;
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  onChange: (pageNumber: number) => void;
  chkHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  totalAbsent: number;

  // deleteHandler: (id: string) => void;
}

const AbsenceList: React.FC<Props> = ({
  absences,
  getAbsences,
  absenceState,
}) => {
  const [activePage, setActivePage] = useState(1);
  const [itemsCountPerPage, setItemsCountPerPage] = useState(10);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(0);
  const [checked, setChecked] = useState(false);
  const [totalAbsent, setTotalAbsent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await getAbsences(itemsCountPerPage, activePage);
      setTotalItemsCount(absenceState.absences.length); //total items count
      setTotalAbsent(absenceState.absences.length); //total absent count
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageChange = async (pageNumber: number) => {
    setActivePage(pageNumber);
    await getAbsences(itemsCountPerPage, pageNumber);
    setTotalItemsCount(absenceState.absences.length);
  };

  const chkHandleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setChecked(true);
      setPageRangeDisplayed(Math.ceil(totalItemsCount / itemsCountPerPage));

      setTotalItemsCount(absenceState.absences.length);
    }
  };

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
                  <h6 className="panel-title">
                    Absence List - Total number of absence {totalAbsent}
                    <h6>
                      Pagination
                      <input
                        type="checkbox"
                        title="Pagination"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          chkHandleChange(e)
                        }
                        defaultChecked={false}
                      />
                    </h6>
                  </h6>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <table className="table table-striped table-bordered table-list">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>MemberNote</th>
                    <th>Status</th>
                    <th>Admitter Note</th>
                    <th>Admitter Id</th>

                    <th>Confirmed At</th>
                    <th>Created At</th>
                    <th>Crew Id</th>

                    <th>Id</th>

                    <th>Rejected At</th>

                    <th>UserId</th>
                  </tr>
                </thead>
                <tbody>
                  <ListRow absences={absenceState.absences} />
                </tbody>
              </table>
              <div className="container-fluid mb-2 mt-1 ">
                <div className="row align-items-center">
                  <div className="col-md-4 col-sm-12">
                    {/* <h6>
                    Showing {this.state.currentPage} to{" "}
                    {this.state.totalPages + " "}
                    of {this.state.totalItems} entries
                  </h6> */}
                  </div>
                  {checked ? (
                    <div className="col-md-8 col-sm-12">
                      <div className="float-md-right">
                        <Pagination
                          activePage={activePage}
                          itemsCountPerPage={itemsCountPerPage}
                          totalItemsCount={totalItemsCount}
                          pageRangeDisplayed={pageRangeDisplayed}
                          onChange={(e: number) => handlePageChange(e)}
                          itemClass="page-item"
                          linkClass="page-link"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
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
    getAbsences: (itemsCountPerPage: number, pageNumber: number) =>
      dispatch(getAbsences(itemsCountPerPage, pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbsenceList);
