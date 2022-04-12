import { client } from "./client";
import { feedQuery } from "./data";

export const RegistrationStorage = () => {
  const Forminfo =
    localStorage.getItem("form") !== "undefined"
      ? JSON.parse(localStorage.getItem("form"))
      : localStorage.clear();
  return Forminfo;
};
