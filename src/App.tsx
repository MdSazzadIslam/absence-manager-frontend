import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { Store } from "redux";
import AppState from "./redux/state/appState";

//import { ConnectedRouter } from "connected-react-router";

import { BrowserRouter as Router } from "react-router-dom";

interface Props {
  store: Store<AppState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
