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
const MasonryLayout = ({ images, Srcimage }) => {
  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={brakepointobj}
      >
        {images?.hits?.map((imge) => (
          <div key={imge?.id} className="p-[2px]">
            <img src={imge.largeImageURL} alt="homeImage" onClick={Srcimage} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
