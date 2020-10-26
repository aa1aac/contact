import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar";
import { LoginForm } from "./components/LoginForm";
import { SignupForm } from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {/* <LoginForm /> */}
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
