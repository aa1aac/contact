import React, { PropsWithChildren, useEffect } from "react";
import { connect } from "react-redux";

import { fetchContacts, Contact, deleteContact } from "../store/actions";
import { StoreState } from "../store/reducers";

interface PropType {
  fetchContacts: () => {};
  contacts: Contact[];
  deleteContact: (id:string) => {}
}



export const _Contacts = (props: PropsWithChildren<PropType>) => {
  const { fetchContacts, deleteContact } = props;

  useEffect(() => {
    fetchContacts();
  }, []);

  const remove = (id?:string) => {
    if(id)
      deleteContact(id);
  }

  return (
    <div>
      <ul className="list-group list-group-flush mt-3">
        {props.contacts.map((contact ) => (
          <li
            key={contact._id}
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{contact.name}</h5>
              <div className="text-danger" style={{ cursor: "pointer" }} onClick={()=>remove(contact._id)}>
                delete <i className="fa fa-trash"></i>{" "}
              </div>
            </div>
            <p className="mb-1">{contact.phoneNumber}</p>
            <small>{contact.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ contact: { contacts } }: StoreState) => {
  return { contacts };
};

export const Contacts = connect(mapStateToProps, { fetchContacts, deleteContact })(_Contacts);
