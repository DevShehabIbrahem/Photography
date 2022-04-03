import React from "react";
import Masonry from "react-masonry-css";
import Boximg from "../ImagesComponent/Boximg";

const brakepointobj = {
  default: 4,
  3000: 6,
  2000: 3,
  1200: 3,
  1000: 2,
  500: 1,
};
const MasonryLayout = ({ respons, one }) => {
  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={brakepointobj}
      >
        {respons?.map((imge) => (
          <Boximg key={imge.id} imge={imge} className="w-max" />
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;
