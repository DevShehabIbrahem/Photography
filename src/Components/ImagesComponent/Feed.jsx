import React, { useEffect, useState } from "react";
import { fetchImages } from "../../Api";
import Modal from "../Modal/Modal";
import Category from "./Category";
import MasonryLayout from "./MasonryLayout";

const Feed = () => {
  const [defaultImages, setDefaultImages] = useState(null);
  const [categoryimages, setCategoryimages] = useState(null);
  const [categoriesName, setCategoriesName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [ImagesUrl, setmagesUrl] = useState(null);

  useEffect(() => {
    //default Homeimages
    let cleanUp = true;
    fetchImages("images").then((images) => {
      if (cleanUp) setDefaultImages(images);
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  //fetch Categoryimages from category
  const categoriesUi = (categoriesData, categoriesName) => {
    setCategoriesName(categoriesName);
    setCategoryimages(categoriesData);
  };

  // Open and send src Url To Modal
  const Srcimage = (e) => {
    const Data = e.target.src;
    setmagesUrl(Data);
    setShowModal(!showModal);
  };

  return (
    <div className="h-screen">
      <Category categoriesUi={categoriesUi} />

      {categoriesName !== "Home" ? (
        <>
          {/* PupUp Modal*/}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            ImagesUrl={ImagesUrl}
          />
          <MasonryLayout images={categoryimages} Srcimage={Srcimage} />
        </>
      ) : (
        <MasonryLayout images={defaultImages} Srcimage={Srcimage} />
      )}
    </div>
  );
};

export default Feed;
