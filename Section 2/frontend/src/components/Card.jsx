import React, { useState } from "react";
import { ThumbUp, Comment, Reply } from "@mui/icons-material";
import profile from "./profile.jpg";

function Card() {
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);
  const [share, setShare] = useState(0);
  let todaydate = new Date();
  const handleLike = () => {
    setLike(like + 1);
  };

  let formattedDate = todaydate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div className="pt-4">
        <div className="shadow-2xl w-96 px-2 py-4 m-5 rounded min-w-min mx-auto">
          <div className="flex ">
            <span className="m-2">
              <img className="w-20 rounded-full" src={profile} />
            </span>
            <div className="my-auto">
              <h2 className="text-lg text-left text-bold">Kuldeep yadav</h2>
              <p className="text-sm">{formattedDate}</p>
            </div>
          </div>
          <p className="text-left m-2">A Beautiful sunshine image</p>
          <img
            className="p-2 rounded"
            src="https://images.unsplash.com/photo-1593935320420-7216f4f96fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2hpbmUlMjBmcmVlJTIwdW5zcGFsc2h8ZW58MHx8MHx8fDA%3D"
          />
          <div className="grid grid-cols-3 gap-4 m-auto">
            <div className="mx-auto">
              <div className="text-center text-gray-600">
                <span className="me-1 text-lg">{like}</span>
                <ThumbUp className="mb-1.5" />
              </div>
              <div className="my-auto">
                <button
                  className="bg-blue-700 px-5 py-2 rounded-lg text-white cursor-pointer"
                  onClick={handleLike}
                >
                  Likes
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <div className="text-center text-gray-600">
                <span className="me-1 text-lg">{comment}</span>
                <Comment className="mb-0.5" />
              </div>
              <div className="my-auto">
                <button
                  className="bg-gray-700 px-5 py-2 rounded-lg text-white mt-1 cursor-pointer"
                  onClick={() => setComment(comment + 1)}
                >
                  Comments
                </button>
              </div>
            </div>
            <div className="mx-auto">
              <div className="text-center text-gray-600">
                <span className="me-1 text-lg">{share}</span>
                <Reply className="mb-1.5" />
              </div>
              <div className="my-auto">
                <button
                  className="bg-gray-700 px-5 py-2 rounded-lg text-white cursor-pointer"
                  onClick={() => setShare(share + 1)}
                >
                  Shares
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
