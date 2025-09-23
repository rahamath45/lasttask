

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.data.token); // 
      console.log("Saved token:", localStorage.getItem("token"));
      setMsg("Login successful!");
      navigate("/")
    } catch (err) {
      setMsg(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg ">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h3>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col pt-6">
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">Login</button>
      </form>
      <Link to="/forgot-password" className="d-block mt-3">Forgot Password?</Link>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
export default Login;
