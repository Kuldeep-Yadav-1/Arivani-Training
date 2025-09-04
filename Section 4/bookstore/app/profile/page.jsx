"use client";
import { UploadFile } from "@mui/icons-material";
import api from "../../api/apiUrl";
import UseAppContext from "../../components/useContext";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ShowAlert from "../../utils/showAlert";

function Page() {
  const {
    loggedIn,
    setLoggedIn,
    logout,
    currentUser,
    setCurrentUser,
    loadingData,
    setLoadingData,
  } = UseAppContext();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [avtar, setAvtar] = useState("");
  const [selFile, setSelFile] = useState("");
  const [validFile, setValidFile] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (currentUser == null) {
      setError("Please signin to continue...");
      router.push("/signin");
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser?.name);
      setAvtar(currentUser?.avtar);
    }
  }, [currentUser]);

  const param = useSearchParams();
  const user_id = param.get("id");
  console.log("id", user_id);

  const handleChangeData = async () => {
    if (!name.trim()) {
      // alert("name is empty");
      setError("Name is empty");
      return;
    }

    if (!user_id) {
      // alert("user_id is missing in URL");
      setError("user_id is missing in URL");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post(`/api/update-user-data`, {
        user_id: user_id,
        if(name) {
          name: name;
        },
        if(selFile) {
          avtar: selFile;
        },
      });
      // alert(res?.data?.message || "name change successfully");
      // setCurrentUser({
      //   ...currentUser,
      //   name :name,
      //   avtar : selFile
      // })
      setSuccess(res?.data?.message || "name change successfully");
    } catch (error) {
      // console.log("error occured", error);
      setError("error occured");
    } finally {
      setLoading(false);
    }
  };

  const validateImage = (filename) => {
    console.log(filename, "file name in validate");
    const allowedExt = ["png", "jpeg", "jpg", "gif", "webp"];

    // Get the extension of the uploaded file
    const ext = filename.split(".");
    const extension = ext[1];

    //Check if the uploaded file is allowed
    return allowedExt.includes(extension);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadFile = async (e) => {
    if (!e.target.files) return;

    let file = e.target.files[0];
    console.log(file?.name, "file.name ?");
    if (!file?.name) {
      setSelFile(null);
      return;
    }

    console.log(file.name, " user file");
    const isFileValid = validateImage(file.name);
    console.log(isFileValid, "validation result");

    if (isFileValid) {
      let converted = await convertToBase64(file);
      if (typeof converted === "string") {
        console.log(converted, "base 64 string");
        setSelFile(converted); // Set the base64 string
      }
    } else {
      setSelFile("none");
    }

    setValidFile(isFileValid);
    console.log(isFileValid, "final validation result");
  };

  return (
    <div>
      <div className="min-h-screen bg-[#0b7c6b] flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
          <div>
            {/* Main Container */}
            {/* <div className="text-center font-bold text-[#0b7c6b] text-4xl mb-5">User Profile</div> */}
            <div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Profile Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    // src={source ? userData.avtar : "/image/profile2.png"}
                    // type="file"
                    // onChange={(e) => uploadFile(e)}
                    src={avtar ? avtar : "/image/profile2.png"}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none capitalize"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="avtar"
                      className="block mb-1 text-sm text-[#0b7c6b] font-semibold"
                    >
                      Update Avtar
                    </label>

                    <input
                      type="file"
                      // accept="image/*"
                      // ref={inputFile}
                      id="avtar"
                      placeholder="Upload Avtar"
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
                      // value={selFile}
                      onChange={(e) => uploadFile(e)}
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
                      value={currentUser?.email ? currentUser?.email : "-"}
                      disabled
                      className="w-full px-4 py-2 rounded bg-gray-100 text-[#0b7c6b] border border-gray-300 font-semibold text-sm focus:outline-none"
                    />
                  </div>
                  <button
                    className="w-full py-2 text-center bg-[#0b7c6b] text-white rounded mt-4 cursor-pointer"
                    onClick={handleChangeData}
                    disabled={loading}
                  >
                    {loading ? "Please wait..." : "Update Details"}
                  </button>
                </div>
              </div>
            </div>
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

export default Page;
