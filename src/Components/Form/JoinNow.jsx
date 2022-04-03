import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Register, Login, Form } from "../../Components";
import { camera2, bg } from "../../Assets";
import { client } from "../../utility";

const JoinNow = () => {
  const [registerform, setRegisterform] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    const { googleId, imageUrl } = response.profileObj;
    localStorage.setItem("form", JSON.stringify(response.profileObj));
    const doc = {
      _id: googleId,
      _type: "registration",
      username: response?.profileObj?.name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate(`/user-profile/:${googleId}`);
    });
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen ">
        <img src={bg} alt="bg" className="w-full h-screen" />
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden ">
          <div className="flex justify-center items-center mt-24">
            <div className="flex justify-between items-center max-w-4xl">
              <div className="hidden md:flex w-508 h-420">
                <img src={camera2} alt="pic" className="h-full object-cover" />
              </div>

              <div className="w-350 md:w-508 h-420 bg-white">
                <Form setRegisterform={setRegisterform} />
                {registerform ? (
                  <>
                    <Register
                      username={username}
                      setUsername={setUsername}
                      setPassword={setPassword}
                      password={password}
                    />
                  </>
                ) : (
                  <Login
                    username={username}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    password={password}
                  />
                )}
              </div>

              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                render={(renderprop) => (
                  <button
                    type="button"
                    className="bg-white p-2 rounded-[100%] cursor-pointer output-none duration-500 hover:translate-x-3"
                    onClick={renderprop.onClick}
                    disabled={renderprop.disabled}
                  >
                    <FcGoogle fontSize={30} />
                  </button>
                )}
                onSuccess={responseGoogle} //User Data responseGoogle
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinNow;
