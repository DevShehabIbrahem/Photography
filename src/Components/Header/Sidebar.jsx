import React from "react";
import { ImHome, ImStatsBars2 } from "react-icons/im";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBandcamp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Sidebar = ({ setToggle, toggle }) => {
  return (
    <>
      <span
        className="flex justify-end p-1 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <AiOutlineClose />
      </span>
      <div className="px-3 gap-4 flex flex-col py-4">
        <Link
          to="/home"
          className="flex gap-2 items-center font-bold text-gray-600 hover:text-black delay-150 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          <ImHome fontSize={30} />
          Home
        </Link>
        <Link
          to="/Explore"
          className="flex gap-2 items-center font-bold text-gray-600 hover:text-black delay-150 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          <FaBandcamp fontSize={30} />
          Explore
        </Link>
        <Link
          to="Shop"
          className="flex gap-2 items-center font-bold text-gray-600 hover:text-black delay-150 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          <HiOutlineShoppingBag fontSize={30} />
          Shop
        </Link>
        <Link
          to="Stats"
          className="flex gap-2 items-center font-bold text-gray-600 hover:text-black delay-150 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          <ImStatsBars2 fontSize={30} />
          Stats
        </Link>
        <div className="flex justify-start items-center ">
          <Link
            to="JoinNow"
            className="bg-black py-2 px-4 text-white font-bold rounded w-full text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
