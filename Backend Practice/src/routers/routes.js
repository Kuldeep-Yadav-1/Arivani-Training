import { signup } from "../controllers/users.js";
import express from "express";

const router = express.Router();

router.post("/signup",signup);

export default router;