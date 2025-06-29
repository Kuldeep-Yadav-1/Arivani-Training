import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pasword: String,
    created_at: String,
    age: Number,
    updated_at: String
})

const userModel = mongoose.model("user",userSchema);

export default userModel;








































