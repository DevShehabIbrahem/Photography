import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { BsArrowUpShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import Logo from "../Assets/Logo.png";

const Userprofile = () => {
  return (
    <div className="flex items-center shadow-xl bg-zinc-50 p-5">
      <div className="flex justify-between  w-full items-center max-w-6xl mx-auto">
        <div className="flex items-center w-2/3  ">
          <Link to="/">
            <img src={logo} alt="logo" className="w-30 h-10 mr-5" />
          </Link>
          <div className="border border-gray-300 flex items-center">
            <FaSearch className="text-black ml-2" />
            <input
              type="text"
              className=" outline-none px-2 py-1 bg-zinc-50 "
              placeholder="Search YouPic"
            />
          </div>
        </div>
        <div className="flex items-center w-2/3	 justify-around ">
          <div className="flex items-center space-x-6 text-[30px] text-[#333333]">
            <div>
              <a href="##">
                <AiFillSignal />
              </a>
            </div>
            <div>
              <a href="##">
                <GrMail />
              </a>
            </div>
            <div>
              <a href="##">
                <IoIosNotifications />
              </a>
            </div>
          </div>
          <div className="border border-white p-2 rounded-3xl bg-black text-white">
            <Link to="/user-profile/:Id">
              <FaUserAlt className="w-8 h-8" />
            </Link>
          </div>
          <div>
            <a
              href="##"
              className="flex justify-center items-center bg-black text-white px-5 py-2 font-extrabold text-center"
            >
              <BsArrowUpShort className="text-white mr-2 text-[20px] " />
              Upload
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
