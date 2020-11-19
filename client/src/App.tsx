import React, { useEffect, PropsWithChildren } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/form.css";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./components/Navbar";
import { fetchUser } from "./store/actions";

import { IndexPage } from "./pages/IndexPage";
import { SignupPage } from "./pages/SignupPage";

interface PropType {
  fetchUser: () => {};
}

function _App({fetchUser}: PropsWithChildren<PropType>) {
  useEffect(() => {
    fetchUser();
  }, []);

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

export const App = connect(null, { fetchUser })(_App);
