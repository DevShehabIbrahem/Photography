import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchImages } from "../../Api";
import { category } from "../../utility/data";

const Category = ({ categoriesUi, setImageHome }) => {
  const [categories, setCategories] = useState("");
  const [categoriesData, setCategoriesData] = useState(null);

  const isActiveStyle =
    "flex items-center px-5 my-2 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

  const isNotActiveStyle =
    "flex items-center px-5 my-2 gap-3 text-gray-800 font-bold hover:text-black transition-all duration-200 ease-in-out capitalize";

  useEffect(() => {
    fetchImages(categories).then((item) => setCategoriesData(item));
  }, [categories]);
  useEffect(() => {
    categoriesUi(categoriesData);
  }, [categoriesData, categoriesUi]);

  return (
    <div className="flex shadow-2xl border-b border-gray-500 p-5 ">
      <NavLink
        onClick={() => {
          setImageHome(false);
        }}
        to="/"
        className={({ isActive }) =>
          isActive ? isActiveStyle : isNotActiveStyle
        }
      >
        Home
      </NavLink>
      {category?.map((category) => (
        <NavLink
          key={category.name}
          onClick={(e) => {
            setCategories(e.target.textContent);
            setImageHome(true);
          }}
          to={`/category/${category.name}`}
          className={({ isActive }) =>
            isActive ? isActiveStyle : isNotActiveStyle
          }
        >
          {category?.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
