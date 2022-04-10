import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Outlet, NavLink } from "react-router-dom";

import { userprofile } from "../../Assets";
import {
  RegistrationStorage,
  userQuery,
  client,
  feedPosts,
} from "../../utility";
import Postscreated from "../ImagesComponent/Postscreated";
import Reusblenav from "./Reusblenav";

const Userdetails = () => {
  const [userdata, setUserdata] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  const Userimge = RegistrationStorage();

  const isActiveStyle =
    "flex items-center px-5 my-2 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

  const isNotActiveStyle =
    "flex items-center px-5 my-2 gap-3 text-gray-800 font-bold hover:text-black transition-all duration-200 ease-in-out capitalize";

  const UserPost = userPosts?.filter(
    (items) => items?.postedBy?._id === userdata?._id
  ).length;
  useEffect(() => {
    const query = userQuery(Userimge?.googleId);
    client.fetch(query).then((item) => {
      setUserdata(item[0]);
    });
  }, []);

  useEffect(() => {
    client.fetch(feedPosts).then((item) => {
      setUserPosts(item);
    });
  }, []);
  return (
    <>
      <Reusblenav Userimge={Userimge} />
      <div className="flex flex-col">
        <div className="h-[300px] w-full bg-gradient-to-t from-black to-blue-900 relative">
          <div className="absolute bottom-9 w-full text-white overflow-hidden">
            <div className="flex justify-between items-center space-x-3 ml-3">
              <div className="flex">
                <img
                  src={Userimge?.imageUrl || userprofile}
                  alt="User-profile"
                  title="user"
                  className="rounded-[100px] w-28 h-28 mr-5 border-2 border-gray-400"
                />

                <div className="flex flex-col justify-between">
                  <a href="##" className="text-[50px] font-extrabold ">
                    {userdata?.username || userdata?.name}
                  </a>
                  <div className="flex  items-center space-x-2 font-bold ">
                    <p>
                      Posts <span className="font-bold ml-1">{UserPost}</span>
                    </p>

                    <span>|</span>
                    <p>
                      Followers<span className="ml-2">0</span>
                    </p>
                  </div>
                  <p className="font-bold pt-5">no one viewed your profile</p>
                </div>
              </div>
              <div className="flex flex-col pr-5 font-bold">
                <span className="text-[28px]">0</span>
                <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex shadow-2xl border-b border-gray-500 p-5 ">
        <NavLink
          to="/userdetails/posts"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          Created
        </NavLink>
        <NavLink
          to="/userdetails/lastactivty"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          LastActivty
        </NavLink>
        <NavLink
          to="/userdetails/views"
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          most viewed
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Userdetails;
