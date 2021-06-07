import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./utils/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { reduxStore, persistor } from "./Redux/ReduxStore";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={reduxStore}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
