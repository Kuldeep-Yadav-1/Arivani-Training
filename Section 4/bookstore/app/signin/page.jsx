"use client";
import UseAppContext from "../../components/useContext";
import api from "../../api/apiUrl";
import validateEmail from "../../utils/validateEmail";
// import ShowAlert from "../../utils/showAlert";
import axios from "axios";
import ShowAlert from "../../utils/showAlert";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";


function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  

  const {
    loggedIn,
    setLoggedIn,
    logout,
    currentUser,
    setCurrentUser,
    loadingData,
    setLoadingData,
  } = UseAppContext();

  const handleSignin = async () => {
    if (!email.trim() || !password.trim()) {

      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {

      setError("invalid email");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/signin`, {
        email: email.trim().toLowerCase(),
        password: password,
      });


      setSuccess(res?.data?.message || "Signin successful!");
      sessionStorage.setItem("user", JSON.stringify(res?.data?.result));
      setCurrentUser(res?.data?.result);
      setLoggedIn(true);
      setLoadingData(false);
      setEmail("");
      setPassword("");
      setLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {

      setError(error?.response?.data?.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative min-h-screen bg-black flex items-center justify-center">
        {/* -----------------------Background Image------------------ */}
        <img
          src="../image/dicount200.jpg"
          alt="Background"
          className="absolute w-full h-full object-cover opacity-85"
        />

        {/*-----------------SignIn Container--------------------- */}
        <div
          className="relative my-5 z-10 p-6 mx-6 md:mx-15 lg:mx-25 rounded-2xl shadow-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
          style={{ background: "rgba(11, 124, 107, 0.92)" }}
        >
          {/* ---------------------Left Side SignUp Section-------------------*/}
          <div>
            <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-6">
              Sign In to Bookstore
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm">Email *</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Password *</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <p className="text-right text-sm my-1">
              <button
                className="ms-2  text-violet-300 cursor-pointer font-semibold underline hover:text-blue-100"
              >
                Forgot Password ?
              </button>
            </p> */}
              <button
                type="submit"
                className="w-full my-4 cursor-pointer bg-white text-[#0b7c6b] font-semibold py-2 rounded hover:bg-gray-200 transition"
                onClick={handleSignin}
              >
                Sign In
              </button>
              <p className="text-right text-sm">
                New To Bookstore ?
                <button
                  className="ms-2 text-violet-300 cursor-pointer font-semibold underline hover:text-blue-100"
                  onClick={() => router.push("/signup")}
                >
                  Create An Account
                </button>
              </p>
            </div>
          </div>

          {/* -----------------Right Side - Logo Section--------------*/}
          <div className="hidden md:flex flex-col items-center justify-center text-center">
            <img
              src="../image/bookstore_logo1.png"
              alt="Bookstore Logo"
              className="h-24 w-24 rounded-full mb-4"
            />
            <div className="text-lg space-y-2">
              <p className="font-semibold leading-relaxed">
                Ready to begin your reading journey?
              </p>
              <p className="font-light leading-snug text-sm italic">
                “A room without books is like a body without a soul.” – Cicero
              </p>
              <p className="text-sm font-medium leading-snug">
                Sign in to continue your journey through stories, knowledge, and
                imagination.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShowAlert error={error} setError={setError} success={success} setSuccess={setSuccess}/>
    </div>
  );
}

export default Page;
