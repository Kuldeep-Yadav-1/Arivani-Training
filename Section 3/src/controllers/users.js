import userModel from "../models/userModel.js";
import { DateTime } from "luxon";

export const signup = async (req, res) => {
  let { name, email, password } = req.body;
  let email_lower = email.toLowerCase();
  try {
    if (!name.trim() || !email_lower.trim() || !password.trim()) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await userModel.findOne({ email: email_lower });
    console.log(user, "user response from find");
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const result = await userModel.create({
      name,
      email: email_lower,
      password,
      user_type_id: 2, // for normal users
      created_at: DateTime.now().toISO(),
      updated_at: DateTime.now().toISO(),
    });
    res.status(200).json({ message: "Signup Successfull", result });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` });
  }
};

export const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    // console.log("user",user)
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    if (password != user?.password) {
      res.status(400).json({ message: "Invalid Password" });
      return;
    }
    res.status(200).json({message: "Signin Successfull", result: user})
  } catch (error) {
    res.status(500).json({message: `Something went wrong ${error}`})
  }
};

export const getAllUsers = async(req, res) => {
    try {
        const result = await userModel.find({});
        res.status(200).json({message: "Users fetched", result});
    } catch (error) {
        res.status(500).json({message: `Something went wrong ${error}`})
    }
}
