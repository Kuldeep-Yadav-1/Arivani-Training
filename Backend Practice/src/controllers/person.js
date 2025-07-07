import personModel from "../models/personModel.js";

import { DateTime } from "luxon";
import { validateEmail } from "../utils/validateEmail.js";
import { validateDOB } from "../utils/validateDOB.js";
export const loginDetails = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobileNo,
    DOB,
    Gender,
    Address: { City, State, Country },
    Pincode,
  } = req.body;
  const email_Lower = email.toLowerCase();

  try {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !mobileNo.trim() ||
      !DOB.trim() ||
      !Gender.trim() ||
      !City.trim() ||
      !State.trim() ||
      !Country.trim() ||
      !Pincode.trim()
    ) {
      res.status(400).json({ message: "all fields are required" });
      return;
    }

    if (!validateEmail(email)) {
      res.status(400).json({ meassage: "invalid Email" });
      return;
    }

    const userEmail = await personModel.findOne({
      email: email_Lower,
    });

    if (userEmail) {
      res.status(400).json({ meassage: "email already exist" });
      console.log(userEmail);
      return;
    }

    if (mobileNo) {
      if (mobileNo.length !== 10) {
        res.status(400).json({ meassage: "Invalid mobile no" });
        return;
      }
    } 
    // if (DOB) {
    //   const dob = new Date(DOB);
    //   const dobInDays = Math.floor(dob.getTime() / (1000 * 60 * 60 * 24));
    //   const today = new Date();
    //   const todayInDays = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    //   const ageInDays = await todayInDays - dobInDays;
    //   if (ageInDays <= 18 * 365 + 4) {
    //     res.status(400).json({ meassage: "You are not Adult"});
    //     return;
    //   }
    // }

    if (DOB) {
      const dob = DateTime.fromISO(DOB);
      console.log("dob" ,dob);
      const nowAge = DateTime.now();
      console.log("nowAge" ,nowAge);
      const ageDifference = nowAge.diff(dob, "years").years;
      console.log("ageDifference" ,ageDifference);
      if (ageDifference < 18) {
        res.status(400).json({ meassage: "You are not elisible.your age is less than 18" });
      }
    }

    const result = await personModel.create({
      firstName,
      lastName,
      email,
      mobileNo,
      DOB,
      Gender,
      Address: { City, State, Country },
      Pincode,
      created_at: DateTime.now().toISO(),
    });
    res.status(200).json({ message: "Successfully logIn", result });
  } catch (error) {
    res.status(500).json({ message: "Some thing went wrong", error });
    console.log(error);
    return;
  }
};
