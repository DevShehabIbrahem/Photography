import Home from "./Container/Home";
import { Routes, Route } from "react-router-dom";

import { Login, JoinNow, Userprofile } from "./Components";
import Userdetails from "./Components/User/Userdetails";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Userdetails" element={<Userdetails />} />
        <Route path="JoinNow" element={<JoinNow />} />
        <Route path="/*" element={<Home />} />
        <Route path="/user-profile/:userId" element={<Userprofile />} />
      </Routes>
    </div>
  );
};

export default App;
