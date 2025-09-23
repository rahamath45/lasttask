

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", { name, email, password });
               console.log(res)
              setMsg(res.data.message);
             navigate("/login")
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg ">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h3>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col pt-6">
        <input  placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)} required 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
        <input  type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required 
           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
        <input  type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required 
           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"/>
        <button  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">Register</button>
      </form>
      {msg && <p className="mt-4 text-center text-red-500">{msg}</p>}
    </div>
  );
}
export default Register;
