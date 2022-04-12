import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Register, Login } from "../../Components";
import { client } from "../../utility";

const JoinNow = () => {
  const [registerform, setRegisterform] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const { googleId, imageUrl } = response.profileObj;

    localStorage.setItem("form", JSON.stringify(response.profileObj));
    if (googleId) {
      const doc = {
        _id: googleId,
        _type: "registration",
        username: response?.profileObj?.name,
        image: imageUrl,
      };
      client.createIfNotExists(doc).then(() => {
        navigate(`/user-profile/:${googleId}`);
      });
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="hidden md:flex  font-extrabold h-screen w-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-screen w-full z-10"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <p className="text-white  text-[40px] overflow-hidden absolute top-0 left-11 h-full flex items-center w-2/3 ">
              Connect with your favorite photographers, models and brands
            </p>
          </div>

          <img
            src="https://source.unsplash.com/1600x900/?space,nature,photography,art"
            alt="Cover-user"
            className="w-full 2xl:h-510 shadow-lg object-cover"
          />
        </div>

        <div className="w-full bg-white ">
          <div className=" mx-10 md:mx-28 flex flex-col justify-center space-y-4 md:space-y-6">
            <div className="my-2">
              <h1 className=" font-extrabold text-2xl text-[#333333]">
                Sign in to YouPic
              </h1>
            </div>
            
            {registerform ? (
              <>
                <Register
                  username={username}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  password={password}
                  setRegisterform={setRegisterform}
                />
              </>
            ) : (
              <Login
                username={username}
                setUsername={setUsername}
                setPassword={setPassword}
                password={password}
                setRegisterform={setRegisterform}
                responseGoogle={responseGoogle}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNow;
