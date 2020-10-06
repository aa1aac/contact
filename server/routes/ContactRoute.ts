import { Router } from "express";

import { isAuth } from "../middlewares/isAuth";
import { getContacts, addContacts } from "../controller/ContactsController";

const router = Router();

// /api/contacts/
// GET
// PRIVATE
router.get("/", isAuth, getContacts);

// /api/contacts/
// POST
// PRIVATE

// todo add validation
router.post("/", isAuth, addContacts);

// /api/contacts/:contactId
// DELETE
// PRIVATE
router.delete("/:contactId", isAuth);

// /api/contacts/:contactId
// PUT
// PRIVATE
router.put("/:contactId", isAuth);

export { router };
