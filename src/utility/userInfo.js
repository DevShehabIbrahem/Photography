export const fetchUser = () => {
  //Google
  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return User;
};
export const formInfo = () => {
  const Forminfo =
    localStorage.getItem("form") !== "undefined"
      ? JSON.parse(localStorage.getItem("form"))
      : localStorage.clear();
  return Forminfo;
};
