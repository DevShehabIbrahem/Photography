import Home from "./Container/Home";
import { Routes, Route } from "react-router-dom";

import { Login, JoinNow, Userprofile } from "./Components";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="JoinNow" element={<JoinNow />} />
        <Route path="/*" element={<Home />} />
        <Route path="/user-profile/:userId" element={<Userprofile />} />
      </Routes>
    </div>
  );
};

export default App;
