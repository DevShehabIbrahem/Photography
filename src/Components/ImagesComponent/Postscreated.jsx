import React, { useEffect, useState } from "react";
import {
  client,
  feedPosts,
  feedQuery,
  RegistrationStorage,
  urlFor,
  userQuery,
} from "../../utility";
import { noposts } from "../../Assets";

const Postscreated = ({ item }) => {
  const [data, setData] = useState(null);

  const [lastActivty, setLastActivty] = useState(null);

  const [allActivty, setAllActivty] = useState(null);
  const Userimge = RegistrationStorage();

  useEffect(() => {
    let cleanUp = true;
    //User Data
    const query = userQuery(Userimge.googleId);
    client.fetch(query).then((item) => {
      if (cleanUp) setData(item[0]);
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  useEffect(() => {
    let cleanUp = true;

    //Images Data
    client.fetch(feedQuery).then((item) => {
      if (cleanUp) {
        setAllActivty(item);
        setLastActivty(item[0]);
      }
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  return (
    <>
      {allActivty?.length !== 0 ? (
        <div className="flex items-center p-5">
          {allActivty?.map((item) => (
            <>
              <div
                key={item?._id}
                className="ml-4 border border-gray-400 p-2 opacity-95 hover:opacity-100 transition-all duration-1000 ease"
              >
                <img
                  src={urlFor(item?.image).height(300).width(300).url()}
                  alt="user-created"
                  className="object-cover"
                />
              </div>
            </>
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
