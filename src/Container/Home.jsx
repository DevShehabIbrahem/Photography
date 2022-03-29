import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchImages } from "../Api";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Search from "../Components/Search";

const Home = () => {
  const [respons, setRespons] = useState([]);

  useEffect(() => {
    fetchImages().then(({ data }) => setRespons(data));
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Feed respons={respons} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Home;
