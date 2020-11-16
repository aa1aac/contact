import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/form.css";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/Navbar";

import { IndexPage } from "./pages/IndexPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/" component={IndexPage} exact />
      </Switch>
    </Router>
  );
}

export { App };
