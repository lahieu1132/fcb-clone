import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <div className='App bg-[#181733] '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password-email' element={<ForgotPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
