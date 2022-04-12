import React, { useEffect, useState, useCallback } from "react";
import { fetchImages } from "../../Api";

import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);

  //Add the reuslt of images inside the local
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        localStorage.setItem("images", JSON.stringify(images));
        window.location.reload();
      }
    },
    [images]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  //search result
  useEffect(() => {
    fetchImages(term).then((items) => {
      setImages(items);
    });
  }, [term]);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between">
        {/* logo*/}
        <div className="flex gap-2 items-center">
          <div className="flex justify-center items-center border-y border-amber-200">
            <FaSearch className="text-white mr-2" />
            <input
              type="text"
              className="outline-none bg-transparent relative py-1 text-white font-extrabold"
              placeholder="Search YourPic..."
              onFocus={() => {
                navigate("/search");
                localStorage.removeItem("images");
              }}
              onChange={(e) => setTerm(e.target.value)}
              value={term}
            />
          </div>

          <div className="hidden md:flex text-white font-extrabold ml-2 ">
            <a href="/">Go to Home</a>
          </div>
        </div>
        {/* right siade*/}
        <div className="hidden md:flex justify-center items-center gap-4">
          <Link
            to="JoinNow"
            className="bg-black py-2 px-4 text-white font-bold rounded"
          >
            Sign In
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
