import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchImages } from "../Api";
import { Feed, Header, Search } from "../Components";

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
