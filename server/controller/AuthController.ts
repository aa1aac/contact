import { Request, Response } from "express";

import { User, UserType } from "../models/UserModel";


export const getUser = (req: Request, res: Response): void => {};

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

export const UserLogin = (req: Request, res: Response): void => {};

export const UserLogout = (req: Request, res: Response): void => {};
