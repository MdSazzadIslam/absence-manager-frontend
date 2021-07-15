import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Routes: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        {/*   <Route path="/" exact render={(props) => <Header {...props} />} /> */}
      </Switch>
      <Footer />
    </>
  );
};

export default Routes;
