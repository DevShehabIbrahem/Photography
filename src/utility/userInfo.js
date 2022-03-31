export const RegistrationStorage = () => {
  const Forminfo =
    localStorage.getItem("form") !== "undefined"
      ? JSON.parse(localStorage.getItem("form"))
      : localStorage.clear();
  return Forminfo;
};

export const Userid = () => {
  const Id = JSON.parse(localStorage.getItem("id"));
  return Id;
};
