import express from "express";
import { signup } from "../controllers/users.js";
import { tasks } from "../controllers/task.js";

const router = express.Router();
// --------------------signup router-----------------
router.post("/signup", signup);

// --------------------task update router-----------------
router.post("/updatedtask", tasks);

export default router;