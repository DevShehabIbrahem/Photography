import React from "react";
import Images from "./Images";

const Feed = ({ respons }) => {
  return (
    <div>
      <Images respons={respons.hits} />
    </div>
  );
};

export default Feed;
