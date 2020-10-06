import { Request, Response } from "express";

import { Contact, ContactType } from "../models/ContactModel";
import { UserType } from "../models/UserModel";

declare global {
  namespace Express {
    interface User extends UserType {
      email?: string;
      _id?: string;
    }
  }
}

export const getContacts = async (req: Request, res: Response) => {
  try {
    if (req.user && req.user._id) {
      let contacts: ContactType[] = await Contact.find({ _user: req.user._id });

      res.status(200).json({ contacts });
    } else {
      return res.status(401).json({ errors: ["unauthorized"] });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ errors: ["some error occured"] });
  }
};

export const addContacts = async (
  req: Request<{}, { name: string; email?: string; phoneNumber: string }>,
  res: Response
) => {
  const { name, email, phoneNumber } = req.body;

  try {
    let newContact: ContactType = new Contact({
      name,
      email,
      phoneNumber,
      _user: req.user?._id,
    });

    await newContact.save();

    return res
      .status(201)
      .json({ msg: "contact successfully created", id: newContact._id });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ errors: ["some error occured"] });
  }
};
