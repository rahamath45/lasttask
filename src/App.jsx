
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Register from './components/Register'

function App() {
  

  return (
    <>
    <div className="container mt-8  min-h-screen bg-[#fff] shadow">
        <nav className="mb-3 p-6 bg-gray-300 flex justify-between">
          <h1>My App</h1>
        <div> 
          <Link className="me-3" to="/">Home</Link>
          <Link className="me-3" to="/">About</Link>
          <Link className="me-3" to="/register">Register</Link>
          <Link className="me-3" to="/login">Login</Link></div> 
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
