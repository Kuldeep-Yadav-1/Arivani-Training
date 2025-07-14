"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* -----------------------Background Image------------------ */}
      <img
        src="../image/dicount200.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover opacity-85"
      />

      {/*-----------------SignUp Container--------------------- */}
      <div className="relative z-10 bg-[#0b7c6b] bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        {/* ---------------------Left Side SignUp Section-------------------*/}
        <div>
          <h2 className="text-3xl font-bold mb-6">Sign In to Bookstore</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Email *</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Password *</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] focus:outline-none"
              />
            </div>
            <p className="text-right text-sm my-1">
              <button
                className="ms-2  text-violet-300 cursor-pointer font-semibold underline hover:text-blue-100"
              >
                Forgot Password ?
              </button>
            </p>
            <button
              type="submit"
              className="w-full my-3 cursor-pointer bg-white text-[#0b7c6b] font-semibold py-2 rounded hover:bg-gray-200 transition"
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
        <div className="flex flex-col items-center justify-center text-center">
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
  );
}

export default Page;
