import React, { useCallback, useRef, useEffect } from "react";

const Modal = ({ showModal, setShowModal, ImagesUrl }) => {
  const ModalRef = useRef();

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      console.log("done");
      setShowModal(!showModal);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

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
          ref={ModalRef}
        >
          <div className="w-full h-[500px]  bg-white flex justify-between  rounded-md shadow-2xl border-r-8 animate-slide-in border-black">
            <img
              src={ImagesUrl}
              alt="user"
              className="shadow-2xl rounded-md  border-gray-600"
            />
            <div className="flex flex-col justify-center items-center mx-auto  ">
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
