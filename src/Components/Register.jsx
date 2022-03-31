import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { client } from "../utility/client";

const Register = ({ setUsername, username, setPassword, password }) => {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const userInfo = (e) => {
    e.preventDefault();

    if (username && password && email) {
      const doc = {
        _id: uuidv4(), //Generate the new id
        _type: "registration",
        email,
        password,
        username,
        age,
      };
      client.createIfNotExists(doc).then((data) => {
        localStorage.setItem("id", JSON.stringify(data?._id));
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
        onSubmit={userInfo}
        className="flex flex-col h-full w-full px-4 space-y-5 "
      >
        <div>
          <label className="font-bold block text-zinc-700 " htmlFor="user">
            Username
          </label>
          <input
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="text"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold block text-zinc-700" htmlFor="pass">
            Password
          </label>
          <input
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="number"
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
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="Email"
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
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="number"
            id="Age"
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
