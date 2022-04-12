import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { client } from "../../utility";
import { useForm } from "react-hook-form";
import { EmailVal, Pass } from "../../utility/pattern";

const Register = ({
  setUsername,
  username,
  setPassword,
  password,
  setRegisterform,
}) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const [email, setEmail] = useState("");
  const [Showpass, setShowPass] = useState(false);
  const [passtype, setPassType] = useState("password");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Showpass) {
      setPassType("text");
    } else {
      setPassType("password");
    }
  }, [Showpass]);

  const userInfo = () => {
    if (username && password && email) {
      localStorage.removeItem("form");
      const doc = {
        _id: uuidv4(),
        _type: "registration",
        email,
        password,
        username,
        age,
      };
      client.createIfNotExists(doc).then((data) => {
        localStorage.setItem(
          "form",
          JSON.stringify({ googleId: data?._id, name: data.username })
        );

        navigate(`/user-profile/${data?._id}`);
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(userInfo)}
        className="flex flex-col h-full w-full  space-y-3 "
      >
        <div>
          <label className="font-bold block text-zinc-700 " htmlFor="user">
            Username
          </label>
          <input
            ref={register({
              required: "Username is required",
              minLength: {
                value: 4,
                message: "Username shouldn't be less then 4 characters",
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full p-[6px]"
            name="username"
            type="text"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-red-500 m-0"> {errors?.username?.message}</p>
        </div>

        <div>
          <label className="font-bold block text-zinc-700" htmlFor="pass">
            Password
          </label>
          <input
            ref={register({
              required: "password is required",
              minLength: {
                value: 4,
                message:
                  "Password should contain at least 1 lowercase 1 uppercase 4 number ",
              },
              pattern: {
                value: Pass,
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full p-[6px]"
            type={passtype}
            name="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-500 m-0"> {errors?.password?.message}</p>

          <div className="flex items-center space-x-2 font-semibold">
            <input
              checked={Showpass}
              id="passType"
              type="checkbox"
              onChange={() => setShowPass(!Showpass)}
            />
            <label htmlFor="passType">
              {Showpass ? "Hide Password" : "Show Password"}
            </label>
          </div>
        </div>

        <div>
          <label className="font-bold block text-zinc-700" htmlFor="Email">
            Email
          </label>
          <input
            ref={register({
              required: "Email is required",
              pattern: {
                value: EmailVal,
                message: "Please enter a vallid Email",
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full p-[6px]"
            type="text"
            name="email"
            id="Email"
            formNoValidate
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-red-500 m-0"> {errors?.email?.message}</p>
        </div>

        <div>
          <label className="font-bold block text-zinc-700" htmlFor="Age">
            Age
          </label>
          <input
            ref={register({
              required: "Age is required",
              minLength: {
                value: 2,
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full p-[6px]"
            type="number"
            id="Age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p className="text-red-500 m-0"> {errors?.age?.message}</p>
        </div>

        <div className="flex space-x-1 text-[#333333]">
          <p className="font-semibold">if you already have an account?</p>
          <a
            href="?"
            onClick={(e) => {
              e.preventDefault();
              setRegisterform(false);
            }}
            className="font-semibold  text-[#1e1e1e] hover:text-[#050505]"
          >
            Sign in
          </a>
        </div>

        <input
          type="submit"
          className="w-full font-extrabold  text-white bg-black hover:bg-[#0000008a] p-2 cursor-pointer duration-300 "
          value="Sign Up"
        />
      </form>
    </div>
  );
};
export default Register;
