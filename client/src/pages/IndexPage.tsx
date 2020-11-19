import React, { PropsWithChildren } from "react";
import { connect } from "react-redux";

import { StoreState } from "../store/reducers";
import { User } from "../store/actions";
import { LoginForm } from "../components/LoginForm";

export const _IndexPage = (props: PropsWithChildren<{ user: User }>) => {
  if (props.user._id) {
    return <h2>You're logged in</h2>;
  } else {
    return <LoginForm />;
  }
};

const mapStateToProps = ({ user }: StoreState) => {
  return { user };
};

export const IndexPage = connect(mapStateToProps)(_IndexPage);
