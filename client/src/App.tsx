import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MyBarca from "./pages/Profile/MyBarca";

function App() {
  return (
    <>
      <div className='App bg-[#181733] min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />}>
            <Route index element={<MyBarca />} />
            <Route path='configuration' element={<MyBarca />} />
            <Route path='favourites' element={<MyBarca />} />
            <Route path='gift-barca' element={<MyBarca />} />
          </Route>
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
