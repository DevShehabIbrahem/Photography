import React, { useState, useEffect, useRef } from "react";
import { Link, Route, Routes, Outlet, NavLink } from "react-router-dom";

import { userprofile } from "../../Assets";
import {
  RegistrationStorage,
  userQuery,
  client,
  feedPosts,
} from "../../utility";
import { isActiveStyle, isNotActiveStyle } from "../../utility/style";
import Reusblenav from "./Reusblenav";

const Userdetails = () => {
  const [userdata, setUserdata] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [toggle, setToggle] = useState(false);

  const Userimge = RegistrationStorage();
  //return numbers of user posts
  const UserPost = userPosts?.filter(
    (items) => items?.postedBy?._id === userdata?._id
  ).length;

  //user info
  useEffect(() => {
    let cleanUp = true;
    const query = userQuery(Userimge?.googleId);
    client.fetch(query).then((item) => {
      if (cleanUp) setUserdata(item[0]);
    });
    return () => {
      cleanUp = false;
    };
  }, [Userimge?.googleId]);

  //user posts
  useEffect(() => {
    let cleanUp = true;
    client.fetch(feedPosts).then((item) => {
      if (cleanUp) setUserPosts(item);
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <>
      <Reusblenav Userimge={Userimge} setToggle={setToggle} toggle={toggle} />
      {/*Cover Section*/}
      <div className="flex flex-col ">
        <div className="h-[300px] w-full md:bg-gradient-to-t md:from-black relative">
          <img
            src="https://source.unsplash.com/1600x900/?space,nature,photography,art"
            alt="Cover-user"
            className="flex w-full h-full shadow-lg object-cover"
          />
          <div className="absolute flex items-center justify-center md:h-[150px] md:items-start top-24 md:top-20 w-full md:text-white overflow-hidden">
            <div className="flex justify-between items-center space-x-3 ml-3 md:w-full">
              <div className="flex items-center flex-col md:flex-row">
                <img
                  src={Userimge?.imageUrl || userprofile}
                  alt="User-profile"
                  title="user"
                  className="rounded-[100px] w-32 h-32 md:w-28 md:h-28 mr-5 border-2 border-gray-400"
                />

                <div className="flex flex-col justify-between ">
                  <a
                    href="##"
                    className=" text-[40px]  md:text-[50px] font-extrabold "
                  >
                    {userdata?.username || userdata?.name}
                  </a>
                  <div className="hidden md:flex items-center space-x-2 font-bold ">
                    <p>
                      Posts <span className="font-bold ml-1">{UserPost}</span>
                    </p>

                    <span>|</span>
                    <p>
                      Followers<span className="ml-2">0</span>
                    </p>
                  </div>
                  <p className=" hidden md:flex font-bold pt-5">
                    no one viewed your profile
                  </p>
                </div>
              </div>
              <div className=" hidden md:flex flex-col pr-5 font-bold">
                <span className="text-[28px]">0</span>
                <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*LastActivty Section*/}
      <div className="flex shadow-2xl border-b border-gray-500 p-5 justify-center md:justify-start ">
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
      <div className="h-screen  ">
        <Outlet />
      </div>
    </>
  );
};

export default Userdetails;
