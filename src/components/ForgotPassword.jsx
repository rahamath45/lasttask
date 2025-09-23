

import { useState } from "react";
import axios from "axios";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/reset/forgot-password", { email });
      console.log(res)
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg ">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Forgot Password</h3>
      <form onSubmit={handleSubmit} className="flex gap-3 flex-col pt-6">
        <input  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="email" placeholder="Enter email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">Send Reset Link</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
export default ForgotPassword;
