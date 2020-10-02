import express, { Router, Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

import { UserSignup } from "../controller/AuthController";

const router: Router = express.Router();

// /api/auth/login
// POST
router.post("/login");

// /api/auth/logout
// GET
router.get("/logout");

// /api/auth/signup
// POST
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("the name should have minimum length of 3"),
    check("name")
      .isLength({ min: 3 })
      .withMessage("the name must have minimum length of 3")
      .trim(),

    check("email")
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15")
      .matches(/\d/)
      .withMessage("your password should have at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("your password should have at least one sepcial character"),

    check("confirmPassword").custom((value: string, { req }) => {
      if (value !== req.body.password) {
        throw new Error("confirm password does not match");
      }
      return true;
    }),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).formatWith(
      ({ msg }: { msg: string }) => msg
    );

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    return next();
  },
  UserSignup
);

// /api/auth/get-user
// GET
router.get("/get-user");

export { router };
