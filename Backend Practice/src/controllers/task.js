import taskModel from "../models/taskModel.js";
import {DateTime} from "luxon";

export const addTask = (req, res) => {
  let { task } = req.body;
  try {
    if (!task.trim()) {
      res.status(400).json({ message: "Task cannot be empty" });
      return;
    }

    const taskResult = taskModel.create({
      task,
      created_at: DateTime.now().toISO()
    });
    res.status(200).json({ message: "Task added successfully", taskResult });
  } catch (error) {
    res.status(500).json({ message: "Some thing went wrong", error });
    return;
  }
};
