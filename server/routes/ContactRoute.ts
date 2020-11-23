import { NextFunction, Router, Request, Response } from "express";
import {check, validationResult} from 'express-validator'

import { isAuth } from "../middlewares/isAuth";
import { getContacts, addContacts, deleteContact, updateContact } from "../controller/ContactsController";

const router = Router();

// /api/contacts/
// GET
// PRIVATE
router.get("/", isAuth, getContacts);

// /api/contacts/
// POST
// PRIVATE

router.post("/", isAuth, 
[
  check('email')
  .isEmail()
  .normalizeEmail()
  .withMessage('invalid email address'),

  check('name')
  .isLength({min:3})
  .withMessage('name should have minimum length of 3'),

  check('phoneNumber')
  .isLength({min:10})
  .withMessage('phone number should have minimum length of 10')
], 
(req:Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).formatWith(({msg}) => msg)

    if(!errors.isEmpty()) return res.status(422).json({errors:errors.array()})
    
    return next()
},
addContacts);

// /api/contacts/:contactId
// DELETE
// PRIVATE
router.delete("/:contactId", isAuth, deleteContact);

// /api/contacts/:contactId
// PUT
// PRIVATE
router.put("/:contactId", isAuth, updateContact);

export { router };
