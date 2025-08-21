"use client";
import api from "../../api/apiUrl";
import UseAppContext from "../../components/useContext";
import React, { useEffect, useState } from "react";

function Page() {
  const { currentUser } = UseAppContext();
  const [name, setName] = useState(currentUser.name);
  const [loading, setLoading] = useState(false);


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleChangeData = async () => {
    if (!name.trim()) {
      alert("name is empty");
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/signup`, {
        name: name.trim(),
        // avtar: selFile,
      });
      alert(res?.data?.message || "name change successfully");
    } catch (error) {
      console.log("error occured", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b7c6b] flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
        {currentUser ? (
          <div>
            {/* Main Container */}
            {/* <div className="text-center font-bold text-[#0b7c6b] text-4xl mb-5">User Profile</div> */}
            <div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Profile Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    // src={source ? userData.avtar : "/image/profile2.png"}
                    src={
                      currentUser?.avtar
                        ? currentUser?.avtar
                        : "/image/profile2.png"
                    }
                    alt="Profile"
                    className="h-28 w-28 md:h-35 md:w-35 rounded-full border-2 border-[#0b7c6b] "
                  />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <div className=" text-center md:text-left font-bold text-[#0b7c6b] text-4xl mb-5">
                      User Profile
                    </div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      // value={currentUser.name}
                      onChange={handleName}
                      value={name}
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none capitalize"
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
                      value={currentUser.email}
                      readOnly
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
                    />
                  </div>
                  <button
                    className="w-full py-2 text-center bg-[#0b7c6b] text-white rounded mt-4 cursor-pointer"
                    onClick={handleChangeData}
                  >
                    Change Details
                  </button>
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
