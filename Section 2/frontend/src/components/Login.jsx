import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "@mui/material";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState("");
  const [login, setLogin] = useState(false);
  const handleVisibilityPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen border ">
      <div className="grid grid-cols-1 p-5 w-80 rounded shadow-2xl">
        <div className="">
          <label
            htmlFor="userName"
            className="block mt-1 text-sm font-medium text-gray-700"
          >
            User Name*
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className=" ">
          <label
            htmlFor="email"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("email :", e.target.value);
            }}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Password*
          </label>

          <div className="relative">
            <div>
              <input
                type={showpassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log("password :", e.target.value);
                }}
              />
            </div>
            <div
              className="absolute top-1 right-2 cursor-pointer"
              onClick={handleVisibilityPassword}
            >
              {showpassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={login}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <div className="mt-5 text-right">
           <Link to="#" className="text-blue-500 cursor-pointer" style={{textDecoration: 'none'}}>forget password ?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
