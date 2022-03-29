import Home from "./Container/Home";
import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Userprofile from "./Components/Userprofile";
import JoinNow from "./Components/JoinNow";
const App = () => {
  const { userId } = useParams();

  return (
    <div>
      <Routes>
        <Route path="JoinNow" element={<JoinNow />} />
        <Route path="/*" element={<Home />} />
        <Route path="/user-profile/:userId" element={<Userprofile />} />
      </Routes>
    </div>
  );
};

export default App;
