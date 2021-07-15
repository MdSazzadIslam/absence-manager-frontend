import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AbsenceList from "./pages/AbsenceList";

const Routes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={AbsenceList} />
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
