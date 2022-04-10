import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchImages } from "../Api";
import { Header, Search, Feed } from "../Components";

const Home = () => {
  const [respons, setRespons] = useState([]);

  useEffect(() => {
    let cleanUp = true;

    fetchImages().then(({ data }) => {
      if (cleanUp) setRespons(data);
    });
    return () => {
      cleanUp = false;
    };
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
