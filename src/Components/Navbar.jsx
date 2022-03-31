import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between">
        {/* logo left*/}
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center border-y border-amber-200">
            <FaSearch className="text-white mr-2" />
            <input
              type="text"
              className="outline-none bg-transparent relative py-1 text-white font-extrabold"
              placeholder="Search YourPic..."
              onFocus={() => navigate("/search")}
            />
          </div>

          <div className="hidden md:flex text-white font-extrabold ml-2 ">
            <Link to="Explore">Explore</Link>
          </div>
        </div>
        {/* right siade*/}
        <div className="hidden md:flex justify-center items-center gap-4">
          <Link
            to="JoinNow"
            className="bg-black py-2 px-4 text-white font-bold rounded"
          >
            Join now
          </Link>
        </div>
        {/* mewu mobile icon*/}
        <div
          className="flex items-center px-3 justify-center cursor-pointer text-white md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <AiOutlineMenu fontSize={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
