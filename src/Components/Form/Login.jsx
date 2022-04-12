import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import GoogleLogin from "react-google-login";

import { useNavigate } from "react-router-dom";
import { userQuery, client, RegistrationStorage } from "../../utility";
import { FcGoogle } from "react-icons/fc";

const Login = ({
  setUsername,
  username,
  setPassword,
  password,
  setRegisterform,
  responseGoogle,
}) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const [userdata, setUserdata] = useState(null);
  const [Matchmessage, setMatchMessage] = useState(false);
  const navigate = useNavigate();
  const infoUser = RegistrationStorage();

  const FormError = "Your username/email or password were incorrect.";

  useEffect(() => {
    let cleanUp = true;

    const query = userQuery(infoUser?.googleId);
    client.fetch(query).then((items) => {
      if (cleanUp) setUserdata(items[0]);
    });
    return () => {
      cleanUp = false;
    };
  }, [infoUser?.googleId]);

  //ensure if every fields is Not empty
  const matchData = () => {
    if (username === userdata?.username && password === userdata?.password) {
      navigate(`/user-profile/${userdata?._id}`);
      setMatchMessage(false);
    } else {
      setMatchMessage(true);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        render={(renderprop) => (
          <button
            type="button"
            className="flex justify-center items-center  border border-gray-600  bg-white p-2 cursor-pointer outline-none duration-500 w-full hover:translate-y-[-5%] hover:bg-gray-100 hover:shadow-lg font-bold"
            onClick={renderprop.onClick}
            disabled={renderprop.disabled}
          >
            <FcGoogle fontSize={28} className="mr-2" />
            Sign in With Google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
      <form
        className="flex flex-col h-full w-full  space-y-6 "
        onSubmit={handleSubmit(matchData)}
      >
        <div>
          <label
            className="font-extrabold block text-zinc-700 text-[13px]"
            htmlFor="user"
          >
            Username
          </label>
          <input
            ref={register({
              required: "Username is required",
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 w-full p-[6px]"
            name="username"
            type="text"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-red-500 m-0">{errors?.username?.message}</p>
        </div>
        <div>
          <label
            className=" font-extrabold block text-zinc-700 text-[13px]"
            htmlFor="pass"
          >
            Password
          </label>
          <input
            ref={register({
              required: "Password is required",
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400  w-full p-[6px]"
            name="password"
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 m-0">{errors?.password?.message}</p>
        </div>
        <div className="flex flex-col  text-[#333333] space-y-2">
          <p className="text-red-500 m-0">{Matchmessage && FormError}</p>

          <div className="flex space-x-1">
            <p className="font-semibold "> Don't have an account yet?</p>
            <a
              href="##"
              onClick={(e) => {
                e.preventDefault();
                setRegisterform(true);
              }}
              className="font-semibold  text-[#1e1e1e] hover:text-[#050505]"
            >
              Sign Up
            </a>
          </div>
        </div>
        <input
          type="submit"
          className="w-full font-extrabold  text-white bg-black hover:bg-[#0000008a] p-2 cursor-pointer duration-300 "
          value="Sign In"
        />
      </form>
    </div>
  );
};
export default Login;
