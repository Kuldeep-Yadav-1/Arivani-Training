"use client";

import validateName from "../../utils/validateName";
import validateEmail from "../../utils/validateEmail";
import validatePassword from "../../utils/ValidatePassword";
import ShowAlert from "../../utils/showAlert";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import api from "../../api/apiUrl";

function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("All fields are required");
      return;
    }

    if (!validateName(name)) {
      setError("Name must be alphabetic & 2–40 characters.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/signup`, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password: password,
      });

      setSuccess(res?.data?.message || "Signup successful!");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        router.push("/signin");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error?.response?.data?.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0b7c6b] bg-cover bg-center px-4 py-10"
      style={{
        backgroundImage: "url('/image/dicount200.jpg')",
        backgroundBlendMode: "overlay",
        backgroundColor: "#0b7c6b",
      }}
    >
      {/* -----------------SignUp Container--------------------- */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 p-8 gap-8 z-10">
        {/* Left Side Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#0b7c6b] mb-6">
            Sign Up to Bookstore
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-[#0b7c6b]">Full Name *</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b7c6b]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-[#0b7c6b]">Email *</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b7c6b]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-[#0b7c6b]">Password *</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b7c6b]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-[#0b7c6b]">Confirm Password *</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b7c6b]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#0b7c6b] text-white font-semibold py-2 rounded hover:bg-[#096e60] transition"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Sign Up"}
            </button>

            <p className="text-sm text-[#0b7c6b] text-right">
              Already have an account?{" "}
              <button
                className="ml-1 underline hover:text-[#064f44] font-semibold"
                onClick={() => router.push("/signin")}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex flex-col items-center justify-center text-center px-4">
          <img
            src="/image/bookstore_logo1.png"
            alt="Bookstore Logo"
            className="h-24 w-24 rounded-full mb-4 border-2 border-[#0b7c6b]"
          />
          <p className="text-[#0b7c6b] font-semibold text-lg mb-2">
            Welcome to Bookstore!
          </p>
          <p className="text-sm italic text-gray-600">
            “Books are a uniquely portable magic.” – Stephen King
          </p>
          <p className="text-sm mt-2 text-gray-700 font-medium">
            Create an account to explore a world of books, deals, and exclusive content tailored just for you.
          </p>
          <p className="text-sm mt-1 text-gray-700 font-medium">
            Join our community and never miss a story again.
          </p>
        </div>
      </div>

      {/* Alert Messages */}
      <ShowAlert
        error={error}
        setError={setError}
        success={success}
        setSuccess={setSuccess}
      />
    </div>
  );
}

export default Page;

