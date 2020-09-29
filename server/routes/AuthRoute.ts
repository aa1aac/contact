import express, { Router } from "express";

const router: Router = express.Router();

// /api/auth/login
// POST
router.post("/login");

// /api/auth/logout
// GET
router.get("/logout");

// /api/auth/signup
// POST
router.post("/signup");

// /api/auth/get-user
// GET
router.get("/get-user");

export { router };
