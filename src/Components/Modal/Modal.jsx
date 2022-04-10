import React, { useCallback, useRef, useEffect, useState } from "react";
import {
  AiFillHeart,
  AiFillLike,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineLike,
  AiOutlineStar,
  AiOutlineClose,
} from "react-icons/ai";

const Modal = ({ showModal, setShowModal, ImagesUrl }) => {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);
  const [star, setStar] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
  };
  //Use The Escape Button
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  // Add the event and cleant It
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <div
          className="flex items-center justify-center h-screen w-full fixed z-10 px-8 "
          onClick={closeModal}
          style={{
            transform: "translate(-50%,-50%)",
            top: "50%",
            left: "50%",
            background: "rgba(250,250,250,0.2)",
          }}
        >
          <div className="flex justify-between w-full h-[500px] relative  rounded-md shadow-2xl  animate-slide-in ">
            <div
              className="absolute top-0 right-0 pr-1 py-1 md:pr-5 md:py-2 z-10 text-red-800 text-xl cursor-pointer "
              onClick={() => setShowModal(!showModal)}
            >
              <AiOutlineClose fontSize={27} />
            </div>
            <div className="relative">
              <div className="absolute inset-0 h-full opacity-0 hover:opacity-100 bg-opacity-90 duration-300  shadow-2xl">
                <div className=" flex justify-around items-center h-[60px] absolute w-full bottom-5 z-10">
                  <div
                    className="cursor-pointer text-blue-500 text-[28px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLike(!like);
                    }}
                  >
                    {like ? <AiFillLike /> : <AiOutlineLike />}
                  </div>
                  <div
                    className="cursor-pointer text-red-500 text-[28px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setHeart(!heart);
                    }}
                  >
                    {heart ? <AiFillHeart /> : <AiOutlineHeart />}
                  </div>
                  <div
                    className="cursor-pointer text-yellow-500 text-[28px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setStar(!star);
                    }}
                  >
                    {star ? <AiFillStar /> : <AiOutlineStar />}
                  </div>
                </div>
              </div>
              <img
                src={ImagesUrl}
                alt="user"
                className="shadow-2xl rounded-md  border-gray-600 h-full"
              />
            </div>

            <div className="hidden md:flex flex-1 flex-col justify-center items-center mx-auto  bg-white  w-full border-r-8 border-black">
              <p>Are you Ready ?</p>
              <p> This is Our Content!</p>
              <button
                className=" p-3 text-white mt-5 "
                style={{ background: "rgba(0, 0, 0, 0.8)" }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
