import React, { useEffect, useState } from "react";
import { urlFor, feedQuery, client, RegistrationStorage } from "../../utility";
import userprofile from "../../Assets/userprofile.png";
import Modal from "../Modal/Modal";

const Userposts = () => {
  const [showModal, setShowModal] = useState(false);
  const userinfo = RegistrationStorage();
  const [images, setImages] = useState(null);

  const [ImagesUrl, setmagesUrl] = useState(null);

  useEffect(() => {
    let cleanUp = true;
    client.fetch(feedQuery).then((items) => {
      if (cleanUp) setImages(items);
    });
    return () => {
      cleanUp = false;
    };
  }, []);

  // Open and src Url PupUp Modal
  const Srcimage = (e) => {
    const Data = e.target.src;
    setmagesUrl(Data);
    setShowModal(!showModal);
  };

  return (
    <>
      {images?.map(({ about, image, _id, postedBy }) => (
        <div className="relative flex flex-col justify-center w-full" key={_id}>
          {postedBy?._id === userinfo?.googleId && (
            <>
              {/* PupUp Modal*/}
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                ImagesUrl={ImagesUrl}
              />

              <div className="flex items-center justify-start text-[21px] pb-2 ">
                <img
                  src={postedBy.image || userprofile}
                  alt="posts"
                  key={_id}
                  className="w-12 h-12 rounded-[100px]"
                />
                <p className="font-bold text-[#333333] ml-2">
                  {postedBy ? postedBy.username : userinfo?.name}
                </p>
              </div>

              <h1 className="font-bold pb-3 text-[#333333]">{about}</h1>

              <img
                src={urlFor(image).width(650).height(600).url()}
                alt="posts"
                className="h-full border border-gray-300 object-cover p-5"
                title="Post"
                onClick={Srcimage}
              />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Userposts;
