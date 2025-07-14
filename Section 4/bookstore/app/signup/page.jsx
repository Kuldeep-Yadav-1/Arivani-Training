"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [name , setName] = ("");
  const [email , setEmail] = ("");
  const [password , setPassword] = ("");
  const [confirmPassword , setConfirmPassword] = ("");
  const handleSignIn=()=>{
    router.push("/signin");
  }
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* -----------------------Background Image------------------ */}
      <img
        src="../image/dicount200.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-85"
      />

      {/*-----------------SignUp Container--------------------- */}
      <div className="relative bg-[#0b7c6b] bg-opacity-90 p-8 rounded-2xl my-4 shadow-2xl w-full max-w-4xl mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
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
                // onChange={handleName}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email *</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                // onChange={handleEmail}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Password *</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                // onChange={handlePassword}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Confirm Password *</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
                // onChange={handleConfirmPassword}
              />
            </div>
            <button
              type="submit"
              className="w-full my-3 cursor-pointer bg-white text-[#0b7c6b] font-semibold py-2 rounded hover:bg-gray-200 transition"
            >
              Sign Up
            </button>
            <p className="text-right text-sm ">
              Already have an account ?
              <button
                className="ms-2 text-violet-300 cursor-pointer font-semibold underline hover:text-blue-100"
                onClick={handleSignIn}
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
