import { Request, Response } from "express";

import { User, UserType } from "../models/UserModel";

export const getUser = (req: Request, res: Response): void => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(403).json({ errors: ["please log in to get the data"] });
  }
};

export const UserSignup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    let user: UserType | null = await User.findOne({ email });

    if (!user) {
      let newUser: UserType = new User({ name, email, password });

      await newUser.save();

      res.status(201).json({ msg: "user successfully created" });
    } else {
      res.status(422).json({ errors: ["the user already exists"] });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: ["some error occured"] });
  }
};

export const UserLogin = (req: Request, res: Response) => {
  res.status(200).json({ msg: "user successfully logged in" });
};

export const UserLogout = async (req: Request, res: Response) => {
  req.logout();
  res.status(200).json({ msg: "user logged out" });
};
