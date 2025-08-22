import express from "express";
import { getAllUsers, profile, signin, signup, updateUserData, updateUserPassword } from "../controllers/users.js";
import { addbook, getAllBookData, getParamBookdata } from "../controllers/addbook.js";

const router = express.Router();
// --------------------users router-----------------
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/profile", profile);
router.get("/get-all-users", getAllUsers);
router.get("/single-product/:book_id",getParamBookdata);
router.post("/update-user-data", updateUserData);
router.post("/update-user-password", updateUserPassword);



// --------------------addbook router-----------------
router.post("/addbook", addbook);
router.get("/get-all-book-data", getAllBookData);



export default router;