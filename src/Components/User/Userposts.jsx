import React, { useEffect, useState } from "react";
import { urlFor, feedQuery, client, RegistrationStorage } from "../../utility";
import userprofile from "../../Assets/userprofile.png";
import Modal from "../Modal/Modal";

const Userposts = ({ Id, userData }) => {
  const [showModal, setShowModal] = useState(false);
  const userinfo = RegistrationStorage();
  const [images, setImages] = useState(null);
  const [ImagesUrl, setmagesUrl] = useState(null);
  useEffect(() => {
    client.fetch(feedQuery).then((items) => setImages(items));
  }, []);

  const ImageUrl = (e) => {
    setShowModal(!showModal);
    const Url = e.target.src;
    setmagesUrl(Url);
  };

  return (
    <>
      {images?.map(({ about, image, _id, postedBy }) => (
        <div className="relative flex flex-col justify-center ">
          {postedBy?._id === userinfo?.googleId && (
            <>
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                ImagesUrl={ImagesUrl}
              />

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
                  onClick={ImageUrl}
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
