"use client";
import React, { useState } from "react";

function ChangePasswordPage() {
  const [loading, setLoading] = useState(false);
  

  const handleChangePasswoord = () =>{

  }

  return (
    <div className="min-h-screen bg-[#0b7c6b] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
        <div className="text-center font-bold text-[#0b7c6b] text-4xl mb-6">
          Change Password
        </div>

        <div className="space-y-5">
          {/* Old Password */}
          <div>
            <label
              htmlFor="oldPassword"
              className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
            >
              Old Password
            </label>
            <input
              id="oldPassword"
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
            />
          </div>

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
            >
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
            />
          </div>

          <button className="w-full py-2 text-center bg-[#0b7c6b] text-white rounded mt-4 cursor-pointer"
           onClick={handleChangePasswoord}
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
