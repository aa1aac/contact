import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/form.css";

import { Navbar } from "./components/Navbar";

import { IndexPage } from "./pages/IndexPage";
import { SignupPage } from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/signup" component={SignupPage} exact />
      </Switch>
    </Router>
  );
}

export { App };
