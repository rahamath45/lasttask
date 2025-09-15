

import { useState } from "react";
import axios from "axios";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ role,setRole] = useState("")
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", { name, email, password,role });
              setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="card p-4">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="form-control mb-2" type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="form-control mb-2" type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input className="form-control mb-2" placeholder="Role"
          value={role} onChange={(e) => setRole(e.target.value)} required />
        <button className="btn btn-primary w-100">Register</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}
export default Register;
