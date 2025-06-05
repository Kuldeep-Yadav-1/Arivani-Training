import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { RemoveRedEye } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import Swal from "sweetalert2";
import { validateEmail } from "../utils/validateEmail";
import profile from "./profile.jpg";
import ShowAlert from "./ShowAlert";

function Form() {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [selectedGender, setSelectedGender] = useState("MALE");
  const [selectDevice, setSelectDevice] = useState("");
  const [submit, setHandleSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    if (
      !inputFirstName.trim() ||
      !inputEmail.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("All fields are required");
      // setError(error);
      return;
    }

    if (inputFirstName.length <= 3 || inputFirstName.length >= 30) {
      setError("First Name character should be b/w 3 & 30.")
      return;
    }

    if (!validateEmail(inputEmail)) {
      setError("Email is invalid")
      return;
    }

    if (password !== confirmPassword) {
      // alert("password & confirm password is not same");
      setError("Password doesn't match")
      return;
    }

    try {
      if (
        inputFirstName.trim() &&
        inputEmail.trim() &&
        password.trim() &&
        confirmPassword.trim()
      ) {
        // alert("First And Last name is required");
        setSuccess("Signup Successfull")
      }
      setHandleSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const toggledPasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  const toggledConfirmPasswordVisibility = () => {
    setShowConfirmPassword((show) => !show);
  };

  return (
    <>
      <div className="my-5 md:15 lg:my-15 p-5  w-[90%] md:w-[60%] lg:w-[50%] mx-auto rounded shadow-2xl">
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 grid grid-cols-2">
              <div className="mb-4 pe-2">
                <img
                  src={profile}
                  className="w-[25%] lg:w-[22%]  ms-auto rounded-full border"
                />
              </div>
              <div className="mb-4 py-[5%]">
                <h2 className="text-left font-bold text-2xl">SignUp</h2>
              </div>
            </div>

            <div className="">
              <label className="text-base font-medium" htmlFor="firstName">
                First Name *
              </label>
              <br />
              <input
                className="border mt-1 bg-white p-2 mb-5 rounded w-full"
                type="text"
                placeholder="Enter your First Name"
                value={inputFirstName}
                onChange={(e) => setInputFirstName(e.target.value)}
              />
            </div>

            <div className="">
              <label className="text-base font-medium" htmlFor="lastName">
                Last Name
              </label>{" "}
              <br />
              <input
                className="border mt-1 bg-white p-2 mb-5 rounded w-full"
                type="text"
                placeholder="Enter your Last Name"
                value={inputLastName}
                onChange={(e) => setInputLastName(e.target.value)}
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="email" className="text-base font-medium">
                Email *
              </label>
              <br />
              <input
                className="border mt-1 bg-white w-[100%] p-2 mb-5 rounded"
                type="email"
                placeholder="Enter your Email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>

            <div className="col-span-2 ">
              <label className="pe-4 mt-1 mb-5 text-base font-medium">
                Gender
              </label>
              <input
                type="radio"
                id="male"
                name="gender"
                className="pe-2 mt-1 mb-5"
                value="MALE"
                checked={selectedGender === "MALE"}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectedGender(e.target.value);
                }}
              />
              <label htmlFor="male" className="pe-4 ms-1">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                className="pe-2 mt-1 mb-5"
                value="FEMALE"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSelectedGender(e.target.value);
                }}
              />
              <label htmlFor="female" className="ms-1">
                Female
              </label>
            </div>

            <div>
              <label htmlFor="password" className="text-base font-medium">
                Password *
              </label>
              <br />
              <div className="relative">
                <div>
                  <input
                    id="password"
                    className="border mt-1 bg-white w-[100%] p-2 mb-5 rounded"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                </div>
                <div
                  className=""
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 12,
                    cursor: "pointer",
                  }}
                  onClick={toggledPasswordVisibility}
                >
                  {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-base font-medium"
              >
                Confirm Password *
              </label>
              <br />
              <div className="relative">
                <div>
                  <input
                    id="confirmPassword"
                    className="border mt-1 bg-white w-[100%] p-2 mb-5 rounded"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                </div>
                <div
                  className=""
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 12,
                    cursor: "pointer",
                  }}
                  onClick={toggledConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <RemoveRedEye /> : <VisibilityOff />}
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <button
              className="bg-blue-600 text-white text-center px-5 py-2 rounded w-full cursor-pointer"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>

          <div className="">
            {submit ? (
              <div className="shadow-2xl  m-2 p-2">
                <div className="md:w-[60%] lg:w-[40%] mx-auto mt-4">
                  <p>
                    <strong>First Name* :</strong>
                    {inputFirstName}
                  </p>
                  <p>
                    <strong>Last Name : </strong>
                    {inputLastName}
                  </p>
                  <p>
                    <strong>Email* : </strong>
                    {inputEmail}
                  </p>

                  <p>
                    <strong>Gender : </strong>
                    {selectedGender}
                  </p>

                  <p>
                    <strong>Password* : </strong>
                    {password}
                  </p>

                  <p>
                    <strong>Confirm Password* : </strong>
                    {confirmPassword}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <ShowAlert success={success} error={error} setSuccess={setSuccess} setError={setError} />
    </>
  );
}

export default Form;
