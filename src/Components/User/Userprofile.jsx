import { RegistrationStorage } from "../../utility";
import { Userfeed, Reusblenav } from "../../Components";
import { useState } from "react";

const Userprofile = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(false);
  };
  const Userimge = RegistrationStorage();
  return (
    <>
      <Reusblenav
        toggle={toggle}
        changeToggle={changeToggle}
        Userimge={Userimge}
        setToggle={setToggle}
      />
      <Userfeed />
    </>
  );
};

export default Userprofile;
