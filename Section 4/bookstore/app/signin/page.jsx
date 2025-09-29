"use client";
import UseAppContext from "../../components/useContext";
import api from "../../api/apiUrl";
import validateEmail from "../../utils/validateEmail";
import ShowAlert from "../../utils/showAlert";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {
    loggedIn,
    loadingData,
    currentUser,
    setLoggedIn,
    setCurrentUser,
    setLoadingData,
  } = UseAppContext();

  useEffect(() => {
    if (currentUser && loadingData ) {
      setError("You are already logged in...");
      router.push("/");
    }
  }, [currentUser,loadingData]);



  const handleSignin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
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
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const toggledPasswordVisibility = () => {
    setShowPassword((show) => !show);
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
      {/* SignIn Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 p-8 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-[#0b7c6b] mb-6">
            Sign In to Bookstore
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-[#0b7c6b]">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b7c6b]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-sm text-[#0b7c6b]">
                Password *
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b7c6b]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="text-[#0b7c6b] absolute right-3 top-8 cursor-pointer"
                onClick={toggledPasswordVisibility}
              >
                {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#0b7c6b] text-white font-semibold py-2 rounded hover:bg-[#096e60] transition cursor-pointer"
              onClick={handleSignin}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Sign In"}
            </button>

            <p className="text-sm text-[#0b7c6b] text-right">
              New to Bookstore?
              <button
                className="ml-1 underline hover:text-[#064f44] font-semibold cursor-pointer"
                onClick={() => router.push("/signup")}
              >
                Create an Account
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
            Ready to begin your reading journey?
          </p>
          <p className="text-sm italic text-gray-600">
            “A room without books is like a body without a soul.” – Cicero
          </p>
          <p className="text-sm mt-2 text-gray-700 font-medium">
            Sign in to continue your journey through stories, knowledge, and
            imagination.
          </p>
        </div>
      </div>

      {/* Alerts */}
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
