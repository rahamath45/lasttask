

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
    <div className="card p-4">
      <h3>Forgot Password</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="email" placeholder="Enter email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="btn btn-warning w-100">Send Reset Link</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
export default ForgotPassword;
