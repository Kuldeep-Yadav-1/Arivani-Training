import userModel from "../models/userModel.js";
import { DateTime } from "luxon";

export const signup = async (req, res) => {
  let { name, email, avtar, password } = req.body;
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
      avtar,
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
    res.status(200).json({ message: "Signin Successfull", result: user });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` });
  }
};

export const profile = async (req, res) => {
  try {
    const result = await userModel.find({});
    res.status(200).json({ message: "Profile Fetched", result });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const result = await userModel.find({});
    res.status(200).json({ message: "Users fetched", result });
  } catch (error) {
    res.status(500).json({ message: `Something went wrong ${error}` });
  }
};

// export const paginationBook = async (req,res) =>{
//   try {
//     const page = parseInt(req.query.page) ;
//     const limit = 3 ;
//     const totalPosts = Post.countDocuments()
//     const totalPages = Math.ceil(totalPosts / limit)

//     if(page > totalPages){
//       return res.status(400).json({message :"this page does not exist"})
//     }
//   } catch (error) {
//     res.status(500).json({message :"something went wrong",error})
//   }
// }

export const updateUserData = async (req, res) => {
  let { user_id, name, avtar } = req.body;
  try {
    if (!user_id) {
      res.status(400).json({ message: "Please provide user_id" });
      return;
    }
    const result = await userModel.findByIdAndUpdate(
      user_id,
      {
        name,
        avtar,
        updated_at: DateTime.now().toISO(),
      },
      { new: true }
    );
    res.status(200).json({ message: "User data updated", result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateUserPassword = async (req, res) => {
  let { user_id, password } = req.body;
  try {
    if (!user_id) {
      res.status(400).json({ message: "Please provide user id" });
      return;
    }
    const result = await userModel.findByIdAndUpdate(
      user_id,
      {
        password,
        updated_at: DateTime.now().toISO(),
      },
      { new: true }
    );
    res.status(200).json({ message: "Password Updated Successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Some thing went wrong" });
  }
};
