import React, { ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signupUser } from "../store/actions";

interface propTypes {
  signupUser: (args: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {};
}

interface state {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

class _SignupForm extends React.Component<propTypes, state> {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [e.target.id]: e.target.value });
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      this.state.name &&
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword
    ) {
      this.props.signupUser(this.state);
    }
  };

  render() {
    return (
      <form className="card auth_form" onSubmit={this.onSubmit}>
        <div className="card-body">
          <h2>
            {" "}
            Signup <i className="fa fa-user-plus"> </i>{" "}
          </h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              required
              value={this.state.name}
              type="text"
              className="form-control"
              id="name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="email">
              Email address <i className="fa fa-at"> </i>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              aria-describedby="emailHelp"
              onChange={this.onChange}
              value={this.state.email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              required
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              onChange={this.onChange}
              required
              value={this.state.confirmPassword}
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
  }
}

export const SignupForm = connect(null, { signupUser })(_SignupForm);
