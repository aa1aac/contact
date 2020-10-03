import { Request, Response, NextFunction } from "express";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    return next();
  }

  return res.status(401).json({ errors: ["access denied"] });
};
