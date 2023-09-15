import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className='App bg-[#181733] min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
