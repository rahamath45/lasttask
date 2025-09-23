 import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
     <div className="container mt-8  min-h-screen  shadow">
    <nav className="bg-blue-200 shadow-md px-6 py-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        My App
      </h1>

      <div className=" flex flex-col lg:flex lg:flex-row gap-3">
        <button
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          onClick={() => navigate("/Home")}
        >
          Home
        </button>
        <button
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
