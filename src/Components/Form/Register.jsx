import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { client } from "../../utility";
import { useForm } from "react-hook-form";

const Register = ({ setUsername, username, setPassword, password }) => {
  const { register, errors, handleSubmit, reset } = useForm();
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const userInfo = (data) => {
    if (username && password && email) {
      localStorage.removeItem("form");
      const doc = {
        _id: uuidv4(), //Generate the new id
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
      <h1 className="font-bold flex justify-center text-2xl mb-2 ">
        Register Form
      </h1>
      <form
        onSubmit={handleSubmit(userInfo)}
        className="flex flex-col h-full w-full px-4 space-y-5 "
      >
        <div>
          <label className="font-bold block text-zinc-700 " htmlFor="user">
            Username
          </label>
          <input
            ref={register({
              required: "username is required",
              minLength: {
                value: 4,
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            name="Username"
            type="text"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <p className="text-black m-0"> {errors?.Username?.message}</p>
        <div>
          <label className="font-bold block text-zinc-700" htmlFor="pass">
            Password
          </label>
          <input
            ref={register({
              required: "passqord is required",
              minLength: {
                value: 4,
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="number"
            name="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold block text-zinc-700" htmlFor="Email">
            Email
          </label>
          <input
            ref={register({
              required: " email is required",
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="Email"
            name="email"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold block text-zinc-700" htmlFor="Age">
            Age
          </label>
          <input
            ref={register({
              required: "Age is required",
              minLength: {
                value: 4,
              },
            })}
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="number"
            id="Age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="font-bold w-full bg-yellow-500 p-2 cursor-pointer  duration-300 hover:bg-yellow-400"
          value="sign Up"
        />
      </form>
    </div>
  );
};
export default Register;
