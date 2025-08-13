import express from "express";
import { getAllUsers, signin, signup } from "../controllers/users.js";
import { addbook, getAllBookData } from "../controllers/addbook.js";

const router = express.Router();
// --------------------users router-----------------
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/get-all-users", getAllUsers);



// --------------------addbook router-----------------
router.post("/addbook", addbook);
router.get("/get-all-book-data", getAllBookData);



export default router;