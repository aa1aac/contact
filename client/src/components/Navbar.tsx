import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser, User } from "../store/actions";
import { StoreState } from "../store/reducers";

interface PropType {
  logoutUser: () => {};
  user: User;
}

const _Navbar = (props: PropsWithChildren<PropType>): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Contact <i className="fa fa-address-book-o"></i>{" "}
      </Link>

      {props.user._id ? (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="nav-link btn"
              style={{ color: "#ff7b7b" }}
              onClick={props.logoutUser}
            >
              Logout <i className="fa fa-user-times"></i>{" "}
            </button>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

const mapStateToProps = ({ user }: StoreState) => {
  return { user };
};

export const Navbar = connect(mapStateToProps, { logoutUser })(_Navbar);
