import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: String
})

const taskModel = mongoose.model("task",taskSchema);
export default taskModel;