import React, { useState } from "react";
import Vid from "../../Assets/Vid.mp4";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="relative w-full h-full">
        <video
          src={Vid}
          autoPlay
          loop
          muted
          className="object-cover w-full h-screen"
        />

        <div className="flex flex-col font-extrabold justify-center items-center absolute text-center md:text-left top-1/3 text-white md:items-start gap-8 px-10">
          <div className="text-[28px] md:text-[50px] w-3/4  ">
            <p> The Power of Photography at your fingertips</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[20px] font-bold">
              Simple tools for you to socialise, manage and share high-quality
              images.
            </p>
            <a
              href="##"
              className="hidden md:flex justify-center bg-white py-2 text-center px-4 rounded text-black font-extrabold w-32"
            >
              Try it now
            </a>
          </div>
        </div>
      </div>

      {toggle && (
        <div className="absolute top-0 left-0 bottom-0 w-190 z-10 text-black bg-white h-screen animate-slide-in  md:hidden">
          <Sidebar changeToggle={changeToggle} />
        </div>
      )}

      <div className="max-w-6xl mx-auto absolute top-0 left-0 right-0 overflow-hidden">
        <Navbar setToggle={setToggle} toggle={toggle} />
      </div>
    </>
  );
};

export default Header;
