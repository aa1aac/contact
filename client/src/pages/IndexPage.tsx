import React, { PropsWithChildren } from "react";
import { connect } from "react-redux";

import { StoreState } from "../store/reducers";
import { User } from "../store/actions";
import { LoginForm } from "../components/LoginForm";
import { Add } from "../components/Add";
import { Contacts } from "../components/Contacts";

export const _IndexPage = (props: PropsWithChildren<{ user: User }>) => {
  if (props.user._id) {
    return (
      <div className="container mt-3">
        {" "}
        <Add /> <Contacts />
      </div>
    );
  } else {
    return <LoginForm />;
  }
};

const mapStateToProps = ({ user }: StoreState) => {
  return { user };
};

export const IndexPage = connect(mapStateToProps)(_IndexPage);
