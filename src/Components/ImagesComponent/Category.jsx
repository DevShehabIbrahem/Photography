import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchImages } from "../../Api";
import { category } from "../../utility/data";
import { isActiveStyle, isNotActiveStyle } from "../../utility/style";

const Category = ({ categoriesUi }) => {
  const [categoriesName, setCategoriesName] = useState("");
  const [categoriesData, setCategoriesData] = useState(null);

  //Fetch category data
  useEffect(() => {
    let cleanUp = true;
    fetchImages(categoriesName).then((item) => {
      if (cleanUp) setCategoriesData(item);
    });
    return () => {
      cleanUp = false;
    };
  }, [categoriesName]);

  //Send Data To Feed Component
  useEffect(() => {
    categoriesUi(categoriesData, categoriesName);
  }, [categoriesData, categoriesUi, categoriesName]);

  return (
    <div className="flex shadow-2xl border-b border-gray-500 p-5">
      <NavLink
        onClick={(e) => {
          setCategoriesName(e.target.textContent);
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
            setCategoriesName(e.target.textContent);
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
