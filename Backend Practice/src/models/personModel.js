import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobileNo: Number,
  DOB: String,
  Gender: String,
  Address: { City: String, State: String, Country: String },
  Pincode: Number,
  created_at: String
});

const personModel = mongoose.model("personDetail", personSchema);
export default personModel;
