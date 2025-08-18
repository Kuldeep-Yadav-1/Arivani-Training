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
    <div className="">
      {loading ? (
        <p className="text-center text-gray-500 py-4">
          Loading profile data...
        </p>
      ) : userData ? (
        <div className="grid grid-cols-2 gap-5 mx-auto  max-w-xl p-4 shadow-md rounded-md">
          <div>
            <img
              src="./image/profile.jpeg"
              className="h-24 w-24 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className=" mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={userData.name}
                disabled
                className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded border border-gray-300 font-semibold text-sm"
              />
            </div>

            <div className="">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                id="email"
                type="text"
                value={userData.email}
                disabled
                className="w-full bg-gray-100 text-gray-700 px-3 py-2 rounded border border-gray-300 font-semibold text-sm"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-4">No user data found.</p>
      )}
    </div>
  );
}

export default Page;
