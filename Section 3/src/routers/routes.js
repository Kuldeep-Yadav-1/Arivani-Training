import express from "express";
import { getAllUsers, signin, signup } from "../controllers/users.js";
import { addbook } from "../controllers/addbook.js";

const router = express.Router();
// --------------------signup router-----------------
router.post("/signup", signup);

// --------------------signin router-----------------
router.post("/signin", signin);

// --------------------addbook router-----------------
router.post("/addbook", addbook);
router.get("/get-all-users", getAllUsers);



export default router;