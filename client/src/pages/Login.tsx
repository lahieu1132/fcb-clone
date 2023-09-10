import React, { SyntheticEvent, useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/scss/login.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LoginRegist from "../components/LoginRegist";
import LoginCheckEmail from "../components/LoginCheckEmail";

const Login = () => {
  const [isRegist, setIsRegist] = useState<boolean>(false);
  const [hidenPass, setHidenPass] = useState<boolean>(true);

  const onSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    console.log(e);
    setIsRegist(true);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='min-h-screen flex login '>
        <div
          className='fixed left-[-3rem] top-[21rem] h-full rotate-180 z-10  w-1/3'
          style={{
            backgroundImage:
              'url("https://id.fcbarcelona.com/culers/resource/xSFID_ZigzagBackground")',
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className='fixed right-0 bottom-[7rem] md:bottom-[18rem] h-full z-10 w-3/4 md:w-1/3'
          style={{
            backgroundImage:
              'url("https://id.fcbarcelona.com/culers/resource/xSFID_ZigzagBackground")',
            backgroundSize: "cover",
          }}
        ></div>
        <div className='md:w-[386px] w-[326px] m-auto h-max z-20'>
          <img
            src={logo}
            className='w-14 mx-auto pt-8 pb-10 cursor-pointer	'
            data-aura-rendered-by='125:0'
          />
          {isRegist ? (
            <LoginRegist isLogin />
          ) : (
            <LoginCheckEmail onSubmit={onSubmit} />
          )}
          <ul className='flex flex-row justify-center text-white text-sm opacity-60'>
            <li className='px-2 '>
              <Link to='/login'>Legal terms</Link>
            </li>
            <li className='border-x-[1px]  border-white border-solid px-2'>
              <Link to='/login'>privacy policy</Link>
            </li>
            <li className='px-2'>
              <Link to='/login'>Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Login;
