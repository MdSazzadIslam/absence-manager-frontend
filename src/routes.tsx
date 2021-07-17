import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

/* lazy loading for better performance, splits code into smaller chunks */
const AbsenceList = lazy(() => import("./pages/AbsenceList"));

const Routes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={AbsenceList} />
        </Suspense>
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
