import React, { useEffect, useState } from "react";
import { client, feedQuery, urlFor } from "../../utility";
import { noposts } from "../../Assets";

const Postscreated = () => {
  const [allActivty, setAllActivty] = useState(null);

  useEffect(() => {
    let cleanUp = true;

    //All the Images Created From User
    client.fetch(feedQuery).then((item) => {
      if (cleanUp) {
        setAllActivty(item);
      }
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <>
      {allActivty?.length !== 0 ? (
        <div className="flex flex-col items-center md:items-start md:flex-row p-5">
          {allActivty?.map((item) => (
            <div
              key={item?._id}
              className="ml-4 border  border-gray-400 p-2 opacity-95 hover:opacity-100 transition-all duration-1000 ease"
            >
              <img
                src={urlFor(item?.image).height(300).width(300).url()}
                alt="user-created"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <img src={noposts} alt="No-posts" />
        </div>
      )}
    </>
  );
};

export default Postscreated;
