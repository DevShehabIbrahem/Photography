import React, { useEffect, useState } from "react";
import { urlFor, feedQuery, client, RegistrationStorage } from "../../utility";
import userprofile from "../../Assets/userprofile.png";

const Userposts = ({ Id, userData }) => {
  const userinfo = RegistrationStorage();
  console.log(userinfo?.googleId);
  const [images, setImages] = useState(null);
  console.log(images);
  useEffect(() => {
    client.fetch(feedQuery).then((items) => setImages(items));
  }, []);

  return (
    <>
      {images?.map(({ about, image, _id, postedBy }) => (
        <div>
          {postedBy?._id === userinfo?.googleId && (
            <>
              <div className="flex items-center justify-start text-[21px] pb-2">
                <img
                  src={postedBy.image || userprofile}
                  alt="posts"
                  key={_id}
                  className="w-12 h-12 rounded-[100px] "
                />
                <p className="font-bold text-[#333333] ml-2">
                  {postedBy ? postedBy.username : userinfo?.name}
                </p>
              </div>

              <div className="pb-[80px]">
                <h1 className="font-bold pb-3 text-[#333333]">{about}</h1>

                <img
                  src={urlFor(image).width(650).height(600).url()}
                  alt="posts"
                  key={_id}
                  className="h-full w-full border border-gray-300 p-5 shadow-2xl "
                />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Userposts;
