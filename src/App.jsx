
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Register from './components/Register'
import Navbar from './components/Nav'
import Home from './components/Home'

function App() {
  

  return (
    <>
    
    
        <Routes>
          <Route path="/" element={<Navbar/>}/>
           <Route path="/Home" element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      
      
    </>
  )
}

export default App
