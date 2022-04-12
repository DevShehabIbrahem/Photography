import Home from "./Container/Home";
import { Routes, Route } from "react-router-dom";

import { Login, JoinNow, Userprofile, Search } from "./Components";
import Userdetails from "./Components/User/Userdetails";
import Postscreated from "./Components/ImagesComponent/Postscreated";
import Lastactivty from "./Components/ImagesComponent/Lastactivty";
import Postsviews from "./Components/ImagesComponent/Postsviews";
import Gopro from "./Components/Gopro";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="userdetails" element={<Userdetails />}>
          <Route path="posts" element={<Postscreated />} />
          <Route path="lastactivty" element={<Lastactivty />} />
          <Route path="views" element={<Postsviews />} />
        </Route>
        <Route path="gopro" element={<Gopro />} />

        <Route path="JoinNow" element={<JoinNow />} />
        <Route path="/" element={<Home />}>
          <Route path="/*" element={<Search />} />
        </Route>
        <Route path="/user-profile/:userId" element={<Userprofile />} />
      </Routes>
    </div>
  );
};

export default App;
