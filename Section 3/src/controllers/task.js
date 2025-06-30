import { DateTime } from "luxon";
import taskModel from "../models/taskModel.js";

export const tasks = async (req, res) => {
  const { task } = req.body;
  try {
    if (!task.trim()) {
      res.status(400).json({ message: "task field is empty" });
      return;
    }

    const userTask = await taskModel.findOne({ task});
    if (userTask) {
      res.status(400).json({ message: "this task already exist"});
      return;
    }

    const taskResult = taskModel.create({
      task,
      createdAt: DateTime.now().toISO(),
      updatedAt: DateTime.now().toISO(),
    });
    res.status(200).json({ message: "successfully task update", task });
    return;
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });
    return;
  }
};
