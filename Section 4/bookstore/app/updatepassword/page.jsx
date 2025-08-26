"use client";
import React, { useEffect, useState } from "react";
import { Password, RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import UseAppContext from "../../components/useContext";
import { useSearchParams } from "next/navigation";
import api from "../../api/apiUrl";
import ShowAlert from "../../utils/showAlert";

function ChangePasswordPage() {
  const {
    loggedIn,
    setLoggedIn,
    logout,
    currentUser,
    setCurrentUser,
    loadingData,
    setLoadingData,
  } = UseAppContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const param = useSearchParams();
  const user_id = param.get("id");
  console.log("id :", user_id);

  const handleChangePassword = async () => {
    if (!user_id) {
      // alert("User id is missing..");
      setError("User id is missing..");
      return;
    }



    if (!(newPassword === confirmPassword)) {
      // alert("new password and confirm password is incorrect.");
      setError("New Password's Don't match.");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/update-user-password`, {
        user_id,
        oldPassword,
        newPassword,
      });

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSuccess(res?.data?.message || "Password Updated Successfully");
    } catch (error) {
      setError(error?.response?.data?.message || "Something error occured..");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-[#0b7c6b] flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
          <div className="text-center font-bold text-[#0b7c6b] text-4xl mb-6">
            Change Password
          </div>

          <div className="space-y-5">
            {/* Old Password */}
            <div className="relative">
              <label
                htmlFor="oldPassword"
                className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
              >
                Old Password
              </label>
              <input
                id="oldPassword"
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
              />
              <div
                className="text-[#0b7c6b] absolute right-3 top-7 cursor-pointer"
                onClick={() => setShowOldPassword((prev) => !prev)}
              >
                {showOldPassword ? <RemoveRedEye /> : <VisibilityOff />}
              </div>
            </div>

            {/* New Password */}
            <div className="relative">
              <label
                htmlFor="newPassword"
                className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
              >
                New Password
              </label>
              <input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
              />
              <div
                className="text-[#0b7c6b] absolute right-3 top-7 cursor-pointer"
                onClick={() => setShowNewPassword((prev) => !prev)}
              >
                {showNewPassword ? <RemoveRedEye /> : <VisibilityOff />}
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
              >
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
              />
              <div
                className="text-[#0b7c6b] absolute right-3 top-7 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <RemoveRedEye /> : <VisibilityOff />}
              </div>
            </div>

            <button
              className="w-full py-2 text-center bg-[#0b7c6b] text-white rounded mt-4 cursor-pointer"
              onClick={handleChangePassword}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Update Password"}
            </button>
          </div>
        </div>
      </div>
      <ShowAlert
        success={success}
        setSuccess={setSuccess}
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default ChangePasswordPage;
