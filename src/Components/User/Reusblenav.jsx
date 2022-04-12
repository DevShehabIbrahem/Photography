import React from "react";
import { Link } from "react-router-dom";

import { AiFillSignal, AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { BsArrowUpShort, BsCircleFill } from "react-icons/bs";
import { logo, userprofile } from "../../Assets";
import Sidebar from "../Header/Sidebar";

const Reusblenav = ({ toggle, Userimge, setToggle }) => {
  return (
    <div className="flex items-center shadow-xl bg-zinc-50 p-5">
      <div className="flex justify-between  w-full items-center max-w-6xl mx-auto">
        <div className="flex items-center w-2/3">
          <Link to="/">
            <img src={logo} alt="logo" className="w-30 h-10 mr-5" />
          </Link>

          <div className="hidden md:flex border border-gray-300 items-center">
            <FaSearch className="text-black ml-2" />
            <input
              type="text"
              className=" outline-none px-2 py-1 bg-zinc-50 "
              placeholder="Search YouPic"
            />
          </div>
        </div>

        <div className="flex items-center w-2/3	justify-around">
          {toggle && (
            <div className="absolute top-0 left-0 bottom-0 w-190 z-10 text-black bg-white h-screen animate-slide-in  shadow-2xl md:hidden">
              <Sidebar toggle={toggle} setToggle={setToggle} />
            </div>
          )}
          <div className="flex items-center space-x-6 text-[30px] text-[#333333] ">
            <div className="hidden md:flex space-x-5">
              <a href="##">
                <AiFillSignal />
              </a>
              <a href="##">
                <GrMail />
              </a>
              <a href="##" className="relative">
                <span className="absolute top-0 right-0 text-red-500">
                  <span className="bg-red-500 w-5 h-5 animate-ping absolute rounded-full"></span>
                  <BsCircleFill className="text-[12px]" />
                </span>
                <IoIosNotifications />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-14 h-14">
            <a href="##" className="md:hidden text-[40px] text-[#333333] mr-2">
              <IoIosNotifications />
            </a>
            <Link to="/Userdetails">
              <img
                src={Userimge?.imageUrl || userprofile}
                alt="user-profile"
                className="rounded-[100%] w-full  border border-black"
              />
            </Link>

            <div
              className="flex items-center px-3 justify-center cursor-pointer text-[#333333] md:hidden"
              onClick={() => setToggle(!toggle)}
            >
              <AiOutlineMenu fontSize={30} />
            </div>
          </div>
          <div className="hidden md:flex space-x-5">
            <a
              href="##"
              className="flex  items-center bg-black text-white  font-extrabold px-3 p-2 "
            >
              Upload
              <BsArrowUpShort className="text-white  text-[25px] font-bold" />
            </a>
            <Link
              to="/gopro"
              className="flex  items-center bg-zinc-100 border border-gray-600 text-gray-600  font-extrabold px-3 p-2 "
            >
              Go Pro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reusblenav;
