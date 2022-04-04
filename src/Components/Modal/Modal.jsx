import React, { useRef } from "react";

const Modal = ({ showModal, setShowModal, ImagesUrl }) => {
  const ModalRef = useRef();

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="flex items-center justify-center h-screen w-full fixed z-10"
          style={{
            background: "rgb(232, 232, 232,0.6)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          ref={ModalRef}
          onClick={closeModal}
        >
          <div className="w-[800px] h-[500px] bg-white flex justify-between  rounded-md shadow-2xl border-r-8 border-black">
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
