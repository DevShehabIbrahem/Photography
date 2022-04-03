import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";

import { AiFillCheckCircle, AiOutlineCamera } from "react-icons/ai";
import { RegistrationStorage, userQuery, client } from "../../utility";

import { userprofile } from "../../Assets";
import { BsCircle } from "react-icons/bs";
import Userposts from "./Userposts";

const Userfeed = () => {
  const [data, setData] = useState(null);
  const [about, setAbout] = useState("");
  const [imgasset, setImgasset] = useState(null);
  const [send, setSend] = useState(false);
  const userData = RegistrationStorage();
  useEffect(() => {
    const query = userQuery(userData.googleId);
    client.fetch(query).then((item) => {
      setData(item[0]);
    });
  }, [userData.googleId]);

  const dragImage = (e) => {
    setSend(true);
    const { name, type } = e.target.files[0];
    if (
      type === "image/png" ||
      type === "image/jpeg" ||
      type === "image/tiff" ||
      type === "image/svg" ||
      type === "image/gif"
    ) {
      client.assets
        .upload("image", e.target.files[0], {
          contentType: type,
          filename: name,
        })
        .then((data) => {
          setImgasset(data);
        });
    }
  };

  const saveImage = () => {
    setSend(false);
    if ((about, imgasset?._id)) {
      const doc = {
        _type: "create",
        about,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imgasset?._id,
          },
        },
        userId: userData?.googleId,
        postedBy: {
          _type: "postedBy",
          _ref: userData?.googleId,
        },
      };
      client.create(doc).then((data) => {
        window.location.reload();
        setImgasset(data);
      });
    }
  };
  return (
    <div className="px-5 md:max-w-6xl mx-auto mt-5">
      <div className="flex justify-between ">
        <div className="hidden md:flex flex-col flex-1 items-center justify-start text-[#333333] shadow-lg border border-black-600 py-2">
          <Link to="##">
            <img
              src={userData?.imageUrl || userprofile}
              alt="user-profile"
              className="w-32 h-26 rounded-[100%]"
            />
          </Link>

          <Link to="##" className="my-2 font-extrabold ">
            {!userData ? data?.username : userData?.name}
          </Link>

          <a href="##" className="mt-2">
            <IoMdRocket fontSize={30} />
          </a>
        </div>
        <div className="w-full md:w-[57.666667%] border border-black-400 h-[226px] flex flex-col flex-2 mx-5 shadow-lg">
          <div className="w-[95%] mx-auto border-b border-black-600  ">
            <input
              type="text"
              className="pb-[100px] pt-4 w-full outline-none"
              placeholder="Share an update or link..."
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center p-5">
            <label
              className="flex items-center cursor-pointer"
              htmlFor="user-upload"
            >
              <AiOutlineCamera fontSize={28} className="mr-1" />
              Upload a Photography
            </label>
            <input
              type="file"
              onChange={dragImage}
              id="user-upload"
              className="w-0 h-0"
            />

            <div className="bg-zinc-100 border border-gray-600 text-gray-600  font-extrabold px-3 py-1">
              <input
                type="submit"
                value="Post"
                onClick={saveImage}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 ">
            <Userposts Id={userData.googleId} userData={userData?.googleId} />
          </div>
        </div>
        <div className="hidden md:flex flex-col flex-1 border border-black-600 h-420 p-5 shadow-lg">
          <div className="space-y-6 ">
            <div className="flex items-center space-x-2 justify-start ">
              <AiFillCheckCircle />
              <p>Sign Up</p>
            </div>
            <div className="flex items-center space-x-2">
              <AiFillCheckCircle />
              <p>Sign Up</p>
            </div>
            <div className="flex items-center space-x-2">
              <AiFillCheckCircle />
              <p>Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userfeed;
