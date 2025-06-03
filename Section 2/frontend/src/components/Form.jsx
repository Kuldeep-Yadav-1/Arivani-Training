import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Male, RemoveRedEye } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

function Form() {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [selctedGender, setSelectedGender] = useState("MALE");
  const [selectDevice, setSelectDevice] = useState("");
  const [submit, setHandleSubmit] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    setHandleSubmit(true);
  };

  return (
    <div className="my-15 p-5  w-[50%] mx-auto rounded shadow-2xl">
      <form>
        <h2 className="text-center text-bold text-2xl text-blue-900">
          Login Details
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            <label className="" htmlFor="firstName">
              First Name :
            </label>{" "}
            <br />
            <input
              className="border mt-1 bg-white p-2 mb-5 rounded w-full"
              type="text"
              placeholder="Enter your First Name"
              value={inputFirstName}
              onChange={(e) => setInputFirstName(e.target.value)}
              required
            />
          </div>

          <div className="">
            <label className="" htmlFor="lastName">
              Last Name :
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
            <label htmlFor="email">Email :</label>
            <br />
            <input
              className="border mt-1 bg-white w-[100%] p-2 mb-5 rounded"
              type="email"
              placeholder="Enter your Email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password :</label>
            <br />
            <div className="relative">
              <div>
                <input
                  className="border mt-1 bg-white w-[100%] p-2 mb-5 rounded"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div
                className=""
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <RemoveRedEye
                  onClick={(e) => {
                    console.log(e.relatedTarget.value);
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="password">Confirm Password :</label>
            <br />
            <div className="relative">
              <div>
                <input
                  className="border mt-1 bg-white w-[100%] p-2 mb-5 rounded"
                  type="password"
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div
                className=""
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <VisibilityOff
                  onClick={(e) => {
                    console.log(e.relatedTarget.value);
                    setConfirmPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          {/* <div className="col-span-2">
          <label htmlFor="device" className="pe-4 mt-1 mb-5">
            Select Device :
          </label>
          <br />
          <select
            name="select your device"
            id="device"
            className="border p-2 mt-1 mb-5 rounded w-full"
            onChange={(e) => {
              console.log(e.target.value);
              setSelectDevice(e.target.value);
            }}
          >
            <option value="phone" className="pe-2 mt-1 mb-5">
              Phone
            </option>
            <option value="computer" className="pe-2 mt-1 mb-5" selected>
              Computer
            </option>
          </select>
        </div> */}

          <div className="col-span-2 ">
            <label className="pe-4 mt-1 mb-5">Gender:</label>
            <input
              type="radio"
              id="male"
              name="gender"
              className="pe-2 mt-1 mb-5"
              value="MALE"
              checked={selctedGender==="MALE"}
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedGender(e.target.value);
              }}
              selected
            />
            <label htmlFor="male" className="pe-4 ms-1" >
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              className="pe-2 mt-1 mb-5"
              value="FEMALE"
              checked={selctedGender==="FEMALE"}
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedGender(e.target.value);
              }}
            />
            <label htmlFor="female" className="ms-1">Female</label>
          </div>
        </div>

        <div className="">
          <button
            className="bg-blue-600 text-white text-center px-5 py-2 rounded w-full cursor-pointer"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>

        <div className="">
          {submit ? (
            <div className="">
              <div>
                <p>
                  <strong>First Name :</strong>
                  {inputFirstName}
                </p>
                <p>
                  <strong>Last Name :</strong>
                  {inputLastName}
                </p>
                <p>
                  <strong>Email :</strong>
                  {inputEmail}
                </p>

                <p>
                  <strong>Gender :</strong>
                  {selctedGender}
                </p>

              </div>
            </div>
          ) : (<></>)}
        </div>
      </form>
    </div>
  );
}

export default Form;
