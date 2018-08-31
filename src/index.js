import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Login from "./Components/Login";
// import Dashboard from "./Components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Login />, document.getElementById("root"));


registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
