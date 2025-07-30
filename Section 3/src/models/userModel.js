import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_type_id: Number,
    created_at: String,
    updated_at: String
})

const userModel = mongoose.model("user", userSchema);
export default userModel;