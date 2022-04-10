import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchImages } from "../../Api";
import Category from "./Category";
import Images from "./Images";
import MasonryCategory from "./MasonryCategory";

const Feed = () => {
  const [respons, setRespons] = useState(null);
  const [data, setData] = useState([]);
  const [imageHome, setImageHome] = useState(false);

  useEffect(() => {
    fetchImages("images").then((images) => {
      localStorage.setItem("imagesHome", JSON.stringify(respons));
      setRespons(images?.hits);
    });
  }, [respons]);

  const categoriesUi = (categoriesData) => {
    setData(categoriesData);
  };

  return (
    <div>
      <Category categoriesUi={categoriesUi} setImageHome={setImageHome} />

      {imageHome ? (
        <>
          <MasonryCategory items={data} />
        </>
      ) : (
        <Images respons={respons} />
      )}
    </div>
  );
};

export default Feed;
