"use client";
import UseAppContext from "../../components/useContext";
import React, { useEffect, useState } from "react";
import api from "../../api/apiUrl";

function Page() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = UseAppContext();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await api.get("/api/get-all-users");
        const matchedUser = res.data.result.find(
          (item) => item.email === currentUser?.email
        );
        setUserData(matchedUser || null);
      } catch (error) {
        console.log("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-[#0b7c6b] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
        {loading ? (
          <p className="text-center text-gray-500 py-4">
            Loading profile data...
          </p>
        ) : userData ? (
      
          <div>
                {/* Main Container */}
            <div className="text-center font-bold text-[#0b7c6b] text-4xl mb-5">User Profile</div>
            <div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Profile Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src="/image/profile2.png"
                    alt="Profile"
                    className="h-28 w-28 md:h-32 md:w-32 rounded-full border-2 border-[#0b7c6b] object-cover"
                  />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={userData.name}
                      disabled
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      value={userData.email}
                      disabled
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-4">No user data found.</p>
        )}
      </div>
    </div>
  );
}

export default Page;
