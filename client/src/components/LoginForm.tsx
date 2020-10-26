import React, { useState } from "react";

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="card"
      style={{ width: "25rem", border: "none", margin: "0 auto" }}
      onSubmit={onLogin}
    >
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
        <button className="btn btn-secondary">
          {" "}
          Signup <i className="fa fa-user-plus"></i>{" "}
        </button>
      </div>
    </form>
  );
};
