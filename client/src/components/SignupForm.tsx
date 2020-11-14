import React from "react";
import { Link } from "react-router-dom";

export const SignupForm = (): JSX.Element => {
  return (
    <form
      className="card auth_form"
    >
      <div className="card-body">
        <h2>
          {" "}
          Signup <i className="fa fa-user-plus"> </i>{" "}
        </h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group ">
          <label htmlFor="email">
            Email address <i className="fa fa-at"> </i>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group ">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group ">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmpassword"
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Signup
          {/*  */}
          <i className="fa fa-send"></i>{" "}
        </button>
        <br />
        Already have an account?{" "}
        <Link to="/" className="btn btn-secondary">
          {" "}
          login <i className="fa fa-user"></i>{" "}
        </Link>
      </div>
    </form>
  );
};
