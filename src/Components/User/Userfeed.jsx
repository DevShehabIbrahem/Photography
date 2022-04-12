import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";

import { AiFillCheckCircle, AiOutlineCamera } from "react-icons/ai";
import {
  RegistrationStorage,
  userQuery,
  client,
  feedPosts,
} from "../../utility";

import { userprofile } from "../../Assets";
import { BsCircle } from "react-icons/bs";
import Userposts from "./Userposts";

const Userfeed = () => {
  const [userinfo, setUserinfo] = useState(null);
  const [about, setAbout] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [allimages, setAllimages] = useState(null);
  const userData = RegistrationStorage();

  //user First Post
  const Myfirstpost = allimages?.filter(
    (items) => items?.postedBy?._id === userinfo?._id
  );

  useEffect(() => {
    let cleanUp = true;
    //User info
    const query = userQuery(userData.googleId);

    client.fetch(query).then((item) => {
      if (cleanUp) setUserinfo(item[0]);
    });

    return () => {
      cleanUp = false;
    };
  }, [userData.googleId]);

  useEffect(() => {
    let cleanUp = true;

    //Images Data
    client.fetch(feedPosts).then((item) => {
      if (cleanUp) setAllimages(item);
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  //Upload/check The images and Send to DataBase
  const dragImage = (e) => {
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
          setImageUpload(data);
        });
    }
  };

  //after clicked posts button save images in database
  const saveImage = () => {
    if ((about, imageUpload?._id)) {
      const doc = {
        _type: "create",
        about,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageUpload?._id,
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
        setImageUpload(data);
      });
    }
  };

  return (
    <div className="px-5 md:max-w-6xl mx-auto mt-5">
      <div className="flex justify-between ">
        {/*Left Section*/}
        <div className="hidden md:flex flex-col flex-1 items-center justify-start text-[#333333] shadow-lg border border-black-600 py-2">
          <Link to="/Userdetails">
            <img
              src={userData?.imageUrl || userprofile}
              alt="user-profile"
              className="w-32 h-26 rounded-[100%]"
            />
          </Link>

          <Link to="##" className="my-2 font-extrabold ">
            {!userData ? userinfo?.username : userData?.name}
          </Link>

          <a href="##" className="mt-2">
            <IoMdRocket fontSize={30} />
          </a>
        </div>

        {/*middle Section*/}
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
          <div className="flex flex-col justify-center items-center mt-10 mx-5 ">
            <Userposts Id={userData.googleId} userData={userData?.googleId} />
          </div>
        </div>

        {/*Right Section*/}
        <div className="hidden md:flex flex-col flex-1 border border-black-600 h-420 p-5 shadow-lg">
          <div className="space-y-6 ">
            <div className="flex items-center space-x-2 justify-start">
              <AiFillCheckCircle className="text-gray-800" fontSize={25} />
              <p className="text-gray-500 font-semibold">Sign Up</p>
            </div>
            <div className="flex items-center space-x-2 ">
              {Myfirstpost?.length ? (
                <AiFillCheckCircle fontSize={25} className="text-gray-800" />
              ) : (
                <BsCircle />
              )}
              <p className="text-gray-500 font-semibold">
                Upload your first post
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <AiFillCheckCircle className="text-gray-800" fontSize={25} />
              <p className="text-gray-500 font-semibold"> Upload first Cover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userfeed;
