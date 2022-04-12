import React, { useEffect, useState } from "react";
import { noposts } from "../../Assets";
import { client, feedQuery, urlFor } from "../../utility";

const Lastactivty = () => {
  const [lastActivty, setLastActivty] = useState(null);

  useEffect(() => {
    let cleanUp = true;

    //LastImages
    client.fetch(feedQuery).then((item) => {
      if (cleanUp) {
        setLastActivty(item[0]);
      }
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <>
      {lastActivty ? (
        <div className="flex flex-col md:flex-row md:items-start items-center p-5 ">
          <div
            key={lastActivty?._id}
            className="ml-4 border  border-gray-400 p-2 opacity-95 hover:opacity-100 transition-all duration-1000 ease"
          >
            <img
              src={urlFor(lastActivty.image).height(300).width(300).url()}
              alt="user-created"
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center  ">
            <img src={noposts} alt="No-posts" />
          </div>
        </>
      )}
    </>
  );
};

export default Lastactivty;
