import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  KeyboardEvent,
} from "react";

import AbsenceState from "../redux/state/absenceState";
import { connect } from "react-redux";
import AppState from "../redux/state/appState";
import {
  getAbsences,
  getAbsenceById,
} from "../redux/actions/absenceActionCreator";
import Loader from "../components/Loader";
import ListRow from "../components/ListRow";
import Pagination from "react-js-pagination";
import "./AbsenceList.css";

type StateType = {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  checked: boolean;
  totalAbsent: number;
  searchBy: string;
};

type PropsType = {
  absenceState: AbsenceState;
  getAbsences: (itemsCountPerPage: number, pageNumber: number) => void;
  getAbsenceById: (searchBy: string) => void;
};

const AbsenceList: React.FC<PropsType> = ({
  absenceState,
  getAbsences,
  getAbsenceById,
}) => {
  const [absence, setAbsence] = useState<StateType>({
    activePage: 1,
    itemsCountPerPage: 0,
    totalItemsCount: 0,
    pageRangeDisplayed: 0,
    checked: false,
    totalAbsent: 0,
    searchBy: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      await getAbsences(0, absence.activePage);
      setAbsence({
        ...absence,
        totalItemsCount: absenceState.absences.length,
        totalAbsent: absenceState.absences.length,
      });
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageChange = async (pageNumber: number) => {
    await getAbsences(absence.itemsCountPerPage, pageNumber);
    setAbsence({
      ...absence,
      activePage: pageNumber,
      totalItemsCount: absenceState.absences.length,
    });
  };

  const chkHandleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      await getAbsences(10, 1);
      setAbsence({
        ...absence,
        itemsCountPerPage: 10,
        pageRangeDisplayed: Math.ceil(10 / 10),
        totalItemsCount: absenceState.absences.length,
      });
    } else {
      await getAbsences(0, absence.activePage);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setAbsence({
      ...absence,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    await getAbsenceById(absence.searchBy);
  };

  const handleKeyChange = async (e: KeyboardEvent): Promise<void> => {
    if (e.key === "Enter") {
      e.preventDefault();
      await getAbsences(0, absence.activePage);
    }
  };

  if (absenceState.isFetching) {
    return <Loader />;
  }
  if (absenceState.error) {
    return <h5>something went wrong</h5>;
  }
  const { checked, totalAbsent, searchBy } = absence;
  return (
    <div className="main-content">
      <div className="container mt-7">
        {/* Table */}

        <div className="row">
          <div className="col">
            <div className="card shadow">
              <form className="sign-up-form" onSubmit={handleSubmit}>
                <div className="card-header border-0">
                  Pagination
                  <>
                    <input
                      type="checkbox"
                      title="Pagination"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        chkHandleChange(e)
                      }
                      defaultChecked={checked}
                    />
                  </>
                  <h6 className="mb-0">
                    Absence List - Total number of absence {totalAbsent}
                  </h6>
                  <div className="form-group">
                    <input
                      type="text"
                      name="searchBy"
                      className="form-control"
                      value={searchBy}
                      placeholder="For searching please enter absence type or date(YYYY-MM-DD)"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(e)
                      }
                      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        handleKeyChange(e)
                      }
                    />
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
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
                    <div className="col-md-4 col-sm-12"></div>
                    {absence.checked ? (
                      <div className="col-md-8 col-sm-12">
                        <div className="float-md-right">
                          <Pagination
                            activePage={absence.activePage}
                            itemsCountPerPage={absence.itemsCountPerPage}
                            totalItemsCount={absence.totalItemsCount}
                            pageRangeDisplayed={absence.pageRangeDisplayed}
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
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    absenceState: state.absenceState,
    memberState: state.memberState,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getAbsences: (itemsCountPerPage: number, pageNumber: number) =>
      dispatch(getAbsences(itemsCountPerPage, pageNumber)),
    getAbsenceById: (searchBy: string) => dispatch(getAbsenceById(searchBy)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbsenceList);
