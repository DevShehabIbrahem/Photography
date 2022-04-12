import React, { useCallback, useEffect } from "react";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";

import PhotoDeatils from "../ImagesComponent/PhotoDeatils";

const Modal = ({ showModal, setShowModal, ImagesUrl }) => {
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

  // Add the event and clean It
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {/**images section*/}

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
            {/*Star Icon*/}
            <div
              className="absolute top-0 right-0 pr-1 py-1 md:pr-5 md:py-2 z-10 text-red-800 text-xl cursor-pointer "
              onClick={() => setShowModal(!showModal)}
            >
              <AiOutlineClose fontSize={27} />
            </div>

            {/*innerContent*/}
            <div className="relative w-[90%]">
              <div className="absolute inset-0 h-full  shadow-2xl overflow-hidden ">
                <div className="cursor-pointer text-yellow-500 text-[28px] ">
                  <AiFillStar />
                </div>
              </div>
              <img
                src={ImagesUrl}
                alt="user"
                className="shadow-2xl rounded-md  border-gray-600 h-full object-cover w-full"
              />
            </div>

            {/* deitls section*/}
            <PhotoDeatils />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
