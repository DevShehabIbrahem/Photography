import React, { useEffect } from "react";
import Masonry from "react-masonry-css";

const brakepointobj = {
  default: 4,
  3000: 6,
  2000: 3,
  1200: 3,
  1000: 2,
  500: 1,
};
const MasonryCategory = ({ items }) => {
  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={brakepointobj}
      >
        {items?.hits?.map((imge) => (
          <div key={imge?.id} className="p-[2px]">
            <img src={imge.largeImageURL} alt="homeImage" />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryCategory;
