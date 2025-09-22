

import { useState } from "react";
import {  useParams } from "react-router-dom";
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
    <div className="card p-4">
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="password" placeholder="New Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-danger w-100">Reset Password</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
export default ResetPassword;
