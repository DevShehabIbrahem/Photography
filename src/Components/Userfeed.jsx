import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdRocket } from "react-icons/io";
import { RegistrationStorage, userQuery, client, Userid } from "../utility";
import { userprofile } from "../Assets";

const Userfeed = () => {
  const [data, setData] = useState(null);
  console.log(data);
  const userData = RegistrationStorage();
  const Id = Userid();
  useEffect(() => {
    const query = userQuery(Id);
    client.fetch(query).then((item) => {
      setData(item[0]);
    });
  }, [Id]);
  return (
    <div className="px-5 flex justify-between items-center md:max-w-6xl mx-auto mt-5">
      <div className="flex flex-col items-center justify-center text-[#333333]">
        <Link to="##">
          <img
            src={userData?.imageUrl || userprofile}
            alt="user-profile"
            className="w-32 h-26 rounded-[100%]"
          />
        </Link>

        <Link to="##" className="my-2 font-extrabold ">
          {data?.username}
        </Link>

        <a href="##" className="mt-2  ">
          <IoMdRocket fontSize={30} />
        </a>
      </div>
      <div>
        <div>s</div>
        <div>s</div>
        <div>s</div>
      </div>
      <div>
        <div>s</div>
        <div>s</div>
        <div>s</div>
      </div>
    </div>
  );
};

export default Userfeed;
