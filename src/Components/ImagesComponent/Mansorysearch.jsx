import React from "react";
import Masonry from "react-masonry-css";

const brakepointobj = {
  default: 4,
  3000: 6,
  2000: 3,
  1200: 3,
  1000: 2,
  500: 1,
};
const Masonrysearch = ({ items }) => {
  return (
    <div className="mx-2">
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={brakepointobj}
      >
        {items?.map((item) => (
          <div key={item?.id} className="p-[2px]">
            <img src={item?.largeImageURL} alt="hits" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Masonrysearch;
