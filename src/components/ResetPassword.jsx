

import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/reset/reset-password/${token}`, { password });
      setMsg(res.data.message);
       navigate("/")
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg ">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Reset Password</h3>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col pt-6">
        <input  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="password" placeholder="New Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">Reset Password</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
export default ResetPassword;
