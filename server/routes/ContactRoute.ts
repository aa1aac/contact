import { Router } from "express";

import { isAuth } from "../middlewares/isAuth";

const router = Router();

// /api/contacts/
// GET
// PRIVATE
router.get("/", isAuth);

// /api/contacts/:contactId
// DELETE
// PRIVATE
router.delete("/:contactId", isAuth);

// /api/contacts/:contactId
// PUT
// PRIVATE
router.put("/:contactId", isAuth);

export { router };
