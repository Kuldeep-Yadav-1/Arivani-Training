"use client";

import validateName from "../../utils/validateName";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { setTimeout } from "timers";

function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      // alert("All fields are required");
      Swal.fire({
        title: "Error!",
        text: "All fields are required",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!validateName(name)) {
      {
        Swal.fire({
          title: "Error!",
          text: "name must be Alphabet & (2 < Character < 40).",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
    }

    if (password.trim() != confirmPassword.trim()) {
      Swal.fire({
        title: "Error!",
        text: "Password doesn't match",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`http://localhost:9000/api/signup`, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password,
      });
      // console.log(res,"user data");
      // alert(res?.data?.message);
      Swal.fire({
        icon: "success",
        title: "Signed Up",
        timer: 1000,
        text: res?.data?.message || "Signup successful!",
      });

      console.log(res?.data?.result);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
      setTimeout(() => {
        router.push("/signin");
      }, 1000);
    } catch (error) {
      // alert(error?.response?.data?.message || error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error?.response?.data?.message || "Something went wrong.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center">
      {/* -----------------------Background Image------------------ */}
      <img
        src="../image/dicount200.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-85"
      />

      {/*-----------------SignUp Container--------------------- */}
      <div
        className="relative my-5 z-10 p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
        style={{ background: "rgba(11, 124, 107, 0.92)" }}
      >
        {/* ---------------------Left Side SignUp Section-------------------*/}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Sign Up to Bookstore
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Full Name *</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div>
              <label className="block mb-1 text-sm">Confirm Password *</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full my-3 cursor-pointer bg-white text-[#0b7c6b] font-semibold py-2 rounded hover:bg-gray-200 transition"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Signup"}
            </button>
            <p className="text-right text-sm ">
              Already have an account ?
              <button
                className="ms-2 text-violet-300 cursor-pointer font-semibold underline hover:text-blue-100"
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* -----------------Right Side - Logo Section--------------*/}
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="../image/bookstore_logo1.png"
            alt="Bookstore Logo"
            className="h-24 w-24 rounded-full mb-4"
          />
          <div className="text-lg space-y-3">
            <p className="font-semibold leading-relaxed">
              Welcome to Bookstore!
            </p>
            <p className="text-sm italic font-light leading-snug">
              “Books are a uniquely portable magic.” – Stephen King
            </p>
            <p className="text-sm font-medium leading-snug">
              Create an account to explore a world of books, deals, and
              exclusive content tailored just for you.
            </p>
            <p className="text-sm font-medium leading-snug">
              Join our community to discover books you'll love, get exclusive
              offers, and never miss a story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
