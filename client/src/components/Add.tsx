import React, { useState } from "react";

export const Add = () => {
  const [add, setAdd] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const toggleAddForm = () => {
    setAdd(!add);
  };

  return (
    <>
      <button
        className=" btn btn-block btn-outline-primary"
        onClick={toggleAddForm}
      >
        {" "}
        Add Contact{" "}
      </button>

      {add && (
        <div className="mt-1">
          <form>
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
