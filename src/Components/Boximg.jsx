import React, { useEffect, useState } from "react";

const Boximg = ({ imge }) => {
  return (
    <div className="m-2">
      <img src={imge.largeImageURL} alt="pics" />
    </div>
  );
};

export default Boximg;
