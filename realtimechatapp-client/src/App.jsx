import Home from "./pages/home/Home";
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={authUser ? navigate("/") : <SignUp />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
