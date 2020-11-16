import React, { useState, FormEvent, PropsWithChildren } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { loginUser } from "../store/actions";

const _LoginForm = (
  props: PropsWithChildren<{
    loginUser: (args: { email: string; password: string }) => {};
  }>
): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.loginUser({ email, password });
  };

  return (
    <form className="card auth_form" onSubmit={onLogin}>
      <div className="card-body">
        <h2>
          {" "}
          Login <i className="fa fa-user"> </i>{" "}
        </h2>
        <div className="form-group ">
          <label htmlFor="email">
            Email address <i className="fa fa-at"> </i>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group ">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Login <i className="fa fa-send"></i>{" "}
        </button>
        <br />
        Don't have an account ?{" "}
        <Link to="/signup" className="btn btn-secondary">
          {" "}
          Signup <i className="fa fa-user-plus"></i>{" "}
        </Link>
      </div>
    </form>
  );
};

export const LoginForm = connect(null, { loginUser })(_LoginForm);
