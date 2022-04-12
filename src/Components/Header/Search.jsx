import { useState } from "react";
import MasonryLayout from "../ImagesComponent/MasonryLayout";
import Modal from "../Modal/Modal";

const Search = () => {
  const [showModal, setShowModal] = useState(false);
  const [ImagesUrl, setmagesUrl] = useState(null);

  const Srcimage = (e) => {
    const data = e.target.src;
    setShowModal(!showModal);
    setmagesUrl(data);
  };

  //Images result From local
  const image = JSON.parse(localStorage.getItem("images"));

  return (
    <>
      {image && (
        <>
          <Modal
            ImagesUrl={ImagesUrl}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <MasonryLayout images={image} Srcimage={Srcimage} />
        </>
      )}
    </>
  );
};

export default Search;
