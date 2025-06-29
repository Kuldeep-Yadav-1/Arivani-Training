import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    task: String,
    created_at: String
})

const taskModel = mongoose.model("task", taskSchema);
export default taskModel ;