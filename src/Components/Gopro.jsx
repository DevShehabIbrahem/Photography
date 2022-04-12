import React, { useState } from "react";
import Reusblenav from "./User/Reusblenav";
import pro from "../Assets/pro.svg";
import left1 from "../Assets/left1-1.png";
import left3 from "../Assets/Left-3.png";
import right2 from "../Assets/Right-2.png";
import { RegistrationStorage } from "../utility";

const Gopro = () => {
  const [toggle, setToggle] = useState(false);

  const Userinfo = RegistrationStorage();
  console.log(Userinfo);
  return (
    <>
      <Reusblenav Userimge={Userinfo} toggle={toggle} setToggle={setToggle} />

      <div className="flex flex-col justify-center items-center my-20">
        {/* First Section*/}
        <div className="flex flex-col mx-auto text-center items-center w-full space-y-4  ">
          <div>
            <img src={pro} alt="logo" className="w-15 h-10" />
          </div>
          <div className=" text-[20px] md:text-[50px] font-extrabold text-[#333333]">
            <p>Explore the professional you</p>
          </div>
          <div className="md:w-[40%] text-center text-[#333333] font-semibold">
            <p>
              A suite of amazing features helps you explore the professional
              you. Be a part of the Pro community.
            </p>
          </div>
          <a
            href="##"
            className="flex  items-center bg-black text-white  font-extrabold px-3 p-2 "
          >
            Get Premium
          </a>
        </div>
        <div className=" py-[50px] md:py-[100px]" />
        {/* Left Section*/}
        <div className="flex-col justify-center md:flex md:flex-row items-center md:space-x-24 md:mx-10 mx-5 ">
          <div className="flex flex-col justify-center items-center space-y-5 flex-1  ">
            <div>
              <img src={left1} alt="left-post" className="object-cover" />
            </div>
            {/* Content Section*/}
            <div className="flex flex-col mx-auto items-start  space-y-4">
              <div className=" text-xl md:text-[38px] font-extrabold text-[#333333]">
                <p>Showcase like a PRO</p>
              </div>
              <div className=" md:w-[80%] text-[#333333] md:font-semibold">
                <p>
                  Gain full control of your work and set your unique mark on
                  everything you do! Create your very own website with no coding
                  needed. Own your name and brand with a unique domain and gain
                  full control of everything with private photo, websites and
                  advanced photo collections with password protection and so
                  much more.
                </p>
              </div>
              <a
                href="##"
                className="flex  items-center bg-black text-white  font-extrabold px-3 p-2 "
              >
                Get Pro
              </a>
            </div>
            <div>
              <img src={left3} alt="left-post" />
            </div>
          </div>
          {/* Right Section*/}
          <div className="flex flex-col items-center space-y-5  flex-1  ">
            {/* Content Section*/}
            <div className="flex flex-col mx-auto items-start space-y-4">
              <div className=" text-xl md:text-[38px] font-extrabold text-[#333333]">
                <p>Global Recognition</p>
              </div>
              <div className="md:w-[80%] text-[#333333] md:font-semibold">
                <p>
                  Once you go Premium, you get unlimited HQ uploads, and
                  everything you upload will get super boosted - basically, you
                  get more views and interactions. Additionally, your work gets
                  priority curation, which means that our curators will find
                  your photos more easily.
                </p>
              </div>
              <a
                href="##"
                className="flex  items-center bg-black text-white  font-extrabold px-3 p-2 "
              >
                Get Premium
              </a>
            </div>
            <div>
              <img src={right2} alt="left-post" />
            </div>
            {/* Content Section*/}
            <div className="flex flex-col mx-auto items-start space-y-4">
              <div className=" text-xl md:text-[38px] font-extrabold text-[#333333]">
                <p>Earn and Manage Clients</p>
              </div>
              <div className=" md:w-[80%] text-[#333333] md:font-semibold">
                <p>
                  Whether you want to sell single images, prints or a wedding
                  photography assignment, you have everything you need made
                  simple and smart. And the best thing is you keep 100% of the
                  profits. We provide you with easy access to the technology of
                  printing, receiving global payments and world wide delivery so
                  all you need to think about is your next shot!
                </p>
              </div>
              <a
                href="##"
                className="flex  items-center bg-black text-white  font-extrabold px-3 p-2 "
              >
                Get Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gopro;
