import React from "react";
import { AiFillHeart, AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BsFullscreen } from "react-icons/bs";
import { FaShare, FaShareAlt } from "react-icons/fa";

const PhotoDeatils = () => {
  return (
    <>
      <div className="hidden md:flex flex-col pt-[45px] space-y-8 mx-auto w-1/2 items-center   bg-black border-r-8 border-black">
        <p className="text-[30px] text-white font-bold">Photo Details</p>
        <div className="flex space-x-6 items-center justify-center text-white w-full text-[30px]">
          <div>
            <AiFillHeart />
          </div>
          <div>
            <AiFillStar />
          </div>
          <div>
            <FaShare />
          </div>
          <div>
            <FaShareAlt />
          </div>
        </div>
        <div className="space-x-6">
          <span className="p-[9px] w-[44px] text-center inline-block  border-2 border-gray-500 rounded-[50%] text-gray-500 hover:border-gray-600 cursor-pointer">
            320
          </span>

          <span className="p-[9px] w-[44px] text-center inline-block border-2 border-gray-500 rounded-[50%] text-gray-500 hover:border-gray-600 cursor-pointer">
            60
          </span>

          <span className="p-[9px] w-[44px] text-center inline-block border-2 border-gray-500 rounded-[50%] text-gray-500 hover:border-gray-600 cursor-pointer">
            20
          </span>

          <span className="p-[9px] w-[44px] text-center inline-block border-2 border-gray-500 rounded-[50%] text-gray-500 hover:border-gray-600 cursor-pointer">
            77
          </span>
        </div>
        <div className="flex justify-start items-center text-[30px] font-bold w-full ml-6 text-white ">
          <AiOutlineEye fontSize={40} />
          <p className="ml-2">{31.333}</p>
        </div>
        <div className=" flex justify-start items-start w-full space-x-6 ml-6 ">
          <div className="flex  items-center text-[20px]    text-yellow-500 ">
            <AiFillStar fontSize={30} />
            <p className="ml-2">INSPIRATION</p>
          </div>
          <div className="flex items-center text-[20px]   text-yellow-500 ">
            <BsFullscreen fontSize={30} />
            <p className="ml-2">Cover</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDeatils;
