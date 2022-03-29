const Form = ({ setLoginform, setRegisterform }) => {
  return (
    <div className="my-2">
      <div className="flex justify-center items-center gap-8 ">
        <button
          onClick={(e) => {
            e.preventDefault();
            setLoginform(true);
            setRegisterform(false);
          }}
          className="bg-yellow-500 px-4 rounded font-bold   duration-300 hover:bg-yellow-400  hover:mr-1"
        >
          login
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            setRegisterform(true);
            setLoginform(false);
          }}
          className="bg-yellow-500 px-4 rounded font-bold   duration-300 hover:bg-yellow-400 hover:ml-1"
        >
          Register
        </button>
      </div>
    </div>
  );
};
export default Form;
