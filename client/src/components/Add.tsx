import React, { PropsWithChildren, useState, FormEvent } from "react";
import { connect } from "react-redux";

import { addContact, Contact } from "../store/actions";

interface PropTypes {
  addContact: (data: Contact) => {};
}

const _Add = (props: PropsWithChildren<PropTypes>) => {
  const [add, setAdd] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const toggleAddForm = () => {
    setAdd(!add);
  };

  const onAdd = async (e: FormEvent) => {
    e.preventDefault();
    if (name && phoneNumber) {
      let status = await props.addContact({ name, email, phoneNumber });

      if (status) {
        setAdd(false);
        setName("");
        setEmail("");
        setPhoneNumber("");
      }
    }
  };

  return (
    <>
      <button
        className=" btn btn-block btn-outline-primary d-block"
        onClick={toggleAddForm}
      >
        {" "}
        Add Contact{" "}
      </button>

      {add && (
        <div className="mt-1">
          <form onSubmit={onAdd}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add
            </button>

            <button
              className="btn btn-danger d-inline-block ml-4"
              onClick={toggleAddForm}
            >
              {" "}
              Cancel{" "}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export const Add = connect(null, { addContact })(_Add);
