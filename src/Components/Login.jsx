import { formInfo } from "../utility/userInfo.js";
import { useNavigate } from "react-router-dom";
const Login = ({ setUsername, username, setPassword, password }) => {
  console.log(username);
  const UserInfo = formInfo();
  const navigate = useNavigate();
  console.log("lcoal", UserInfo?.username);
  console.log("lcoal", UserInfo?.password);
  console.log(username);
  console.log(password);

  const matchData = (e) => {
    e.preventDefault();
    if (username === UserInfo.username && password === UserInfo?.password) {
      navigate("/");
    } else {
      alert("you Have An Error in this Form");
    }
  };
  return (
    <div>
      <h1 className="font-bold mb-5 flex justify-center items center text-3xl">
        Login Form
      </h1>
      <form
        className="flex flex-col h-full w-full px-5 space-y-8"
        onSubmit={matchData}
      >
        <div>
          <label className="font-bold block text-zinc-700" htmlFor="user">
            Username
          </label>
          <input
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="text"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold block text-zinc-700" htmlFor="pass">
            Password
          </label>
          <input
            className="outline-none focus:border-yellow-500 border border-gray-400 px-1 w-full"
            type="number"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="font-bold w-full bg-yellow-500 p-2 cursor-pointer duration-300 hover:bg-yellow-400"
          value="Sign In"
        />
      </form>
    </div>
  );
};
export default Login;
