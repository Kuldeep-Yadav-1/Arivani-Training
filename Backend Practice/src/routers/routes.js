import { addTask } from "../controllers/task.js";
import { signup } from "../controllers/users.js";
import express from "express";

const router = express.Router();

// ----------------------------------------------User Management----------------------------------------

router.post("/signup",signup);

// ----------------------------------------------Task Management----------------------------------------
router.post("/add-task", addTask);



export default router;





