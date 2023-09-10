import React, { useState } from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/images/logo.png";

function ForgotPassword() {
  const [error, setError] = useState(false);

  const onClick = () => {
    setError(!error);
  };
  return (
    <>
      <Helmet>
        <title>Forgot Password - Email</title>
      </Helmet>
      <div className='min-h-screen flex'>
        <div className='md:w-[386px] w-[326px] m-auto h-max z-20 pb-24'>
          <img
            src={logo}
            className='w-14 mx-auto pt-8 pb-10 cursor-pointer	'
            data-aura-rendered-by='125:0'
          />
          <p className='mb-1 text-white text-2xl font-[700] text-center'>
            Forgot your password?
          </p>
          <p className='text-white text-2xl font-[700] text-center'>
            No problem
          </p>
          <p className='my-8 text-white  text-sm'>
            Please enter the email address you'd like your password reset
            information sent to.
          </p>
          <div className='mb-8'>
            <input
              placeholder='Your email'
              className='input'
              name='text'
              type='text'
            />
            {error && (
              <p className='text-[#ff4264] mt-2 text-sm font-[600]'>
                Invalid Email Address
              </p>
            )}
          </div>
          <button className='button bg-[#154284]' onClick={onClick}>
            RESET PASSWORD
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
