import express from "express";
import { signup } from "../controllers/users.js";

const router = express.Router();
// --------------------signup router-----------------
router.post("/signup", signup);



export default router;