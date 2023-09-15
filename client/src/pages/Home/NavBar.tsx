import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  const signup = () => {
    navigate("/login");
  };

  return (
    <div className='fixed top-0 left-0 right-0 h-[114px] lg:h-[158px] flex flex-col'>
      <div className='flex-1 flex flex-col'>
        <div className='h-12 bg-[#0a0927]'>
          <div className='h-full flex flex-row items-center justify-between'>
            <Link
              to='/'
              className='text-[13px] rounded-3xl hidden lg:block lg:ml-[140px] bg-gradient-to-r from-[#154284] to-[#181733] py-2 px-4 text-white font-bold'
            >
              Don’t miss out on living this season! ⚽️
              <span className='text-[#fdc52c] mr-2 font-bold '>
                GET YOUR TICKETS
              </span>
            </Link>
            <div className='mr-6'>
              <div className='flex flex-row gap-8'>
                <div
                  className='flex flex-row items-center gap-2 text-base text-white font-bold hover:underline cursor-pointer'
                  onClick={login}
                >
                  <span className='flex items-center justify-center w-8 h-8 bg-[#154284] rounded-full '>
                    <svg
                      className='w-3 h-3'
                      fill='#fff'
                      aria-hidden='true'
                      viewBox='0 0 78.09 76.86'
                    >
                      <path d='M41 72.85c-26.5 0-34.5-2.2-36.7-3.1a8.48 8.48 0 014.8-6.5c6.3-3 16.5-6.4 16.61-6.5a2 2 0 001.3-1.4A31.82 31.82 0 0128.36 51a2.41 2.41 0 00.81-.2 2 2 0 001.19-1.9v-.3a10.65 10.65 0 002.8 1.9 13.68 13.68 0 005.9 1.3 14.23 14.23 0 004.5-.8 13.93 13.93 0 004.4-2.9v.9a2.06 2.06 0 001.2 1.9 2.35 2.35 0 00.8.2 31 31 0 011.4 4.39 2 2 0 001.3 1.4c.1 0 10.3 3.5 16.6 6.5a8.51 8.51 0 014.8 6.6c-2 .81-9.4 2.91-33.1 2.91zM26.16 33a26.33 26.33 0 01-1-3.7 11.05 11.05 0 01-.2-2.1 2.7 2.7 0 00.8-.7 1.82 1.82 0 000-2c-.1-.2-2.7-5.1.2-12.4.4-.9.4-.9 1.4-1.1a12 12 0 003.5-.8 2 2 0 001.2-1.8c0-.3.3-3.3 5.3-4.1 1.9-.3 6.9 1.5 10 2.89 2.5 1 4.4 3 6 6a6.74 6.74 0 01.5 3.11 32.87 32.87 0 01-1.5 8.6 2.25 2.25 0 00.1 1.4c.1.1.1.3.2.39a4.93 4.93 0 00.7.61 11.75 11.75 0 01-.2 2.1 13.09 13.09 0 01-1.2 4.1 1 1 0 00-.5.9v.4c0 1.39-.5 5.3-2.6 6.8-.1.1-.2.1-.3.2-2.3 2.4-4.6 4.8-6.4 5.5a9.54 9.54 0 01-7.4-.4 13 13 0 01-4.9-4.7c0-.1-.1-.1-.1-.2l-.1-.1-.3-.3c-1.8-1.4-2.4-4.5-2.5-6.2v-.6c0-.6 0-1-.5-1.4 0-.1-.1-.2-.2-.4zM71 59.65c-5.4-2.5-13.2-5.3-16-6.3a21.42 21.42 0 00-1.6-4.4 3.55 3.55 0 00-1.4-1.7l.1-3.2a5.24 5.24 0 001-1.1c0-.1.1-.1.1-.2s.2-.3.31-.4a.35.35 0 01.1-.2c.1-.1.1-.3.2-.4s.1-.2.1-.3.1-.2.2-.4.1-.19.1-.3.1-.2.2-.39.1-.2.1-.31.1-.19.1-.39.1-.2.1-.3.1-.2.1-.4.11-.2.11-.3.1-.2.1-.4a32966741879589.32 32966741879589.32 0 00.2-.6v-.3a.39.39 0 01.1-.31v-2a5.17 5.17 0 00.6-1.3 38.57 38.57 0 001.1-4c.5-2.39.31-4.2-.5-5.3.81-2.9 2.2-9.6.4-13.3-2-4-4.6-6.5-8-7.9-1.4-.6-8.4-3.7-12.1-3.2-5.6.81-7.9 4-8.5 6.5a7 7 0 01-1.4.2c-1.9.2-3.5.61-4.7 3.5-2.7 6.7-1.6 11.9-.7 14.3a.8.8 0 00-.19.5 7.28 7.28 0 00-.11 4.7 17.85 17.85 0 001.5 4.9c.11.1.11.2.2.4V37a.37.37 0 00.1.3v.2a.35.35 0 00.11.3.36.36 0 00.1.3c0 .11.1.2.1.4a.37.37 0 00.1.3c0 .11.1.2.1.4s.1.2.1.3.11.2.11.4.1.2.1.3.1.2.1.4.1.2.1.3.1.2.2.4.1.2.1.3.1.2.2.3.1.2.2.3.1.2.2.3.1.2.2.3.2.2.2.3.1.2.2.31l.3.3c.1.1.1.2.2.2l.1.1.1 3.2a3.55 3.55 0 00-1.4 1.7c-.6 1.3-1.2 3.19-1.6 4.39-2.8 1-10.6 3.7-16 6.3A12.46 12.46 0 000 70.86a1.74 1.74 0 00.4 1.19c1.1 1.4 7.2 4.81 40.4 4.81 30 0 35.8-3.4 36.89-4.81a1.69 1.69 0 00.4-1.19A12.13 12.13 0 0071 59.65z'></path>
                    </svg>
                  </span>
                  Login
                </div>
                <div
                  onClick={signup}
                  className='h-10 flex flex-row gap-2 items-center bg-gradient-to-r from-[#8c1a17] to-[#cd122d] px-6 text-base text-white font-bold rounded cursor-pointer'
                >
                  <svg
                    className='w-[22px] h-[22px] '
                    fill='#fff'
                    aria-hidden='true'
                    viewBox='0 0 79.3 80.6'
                  >
                    <path d='M62.2 65.5c5.7-4.2 9.1-10.8 8.6-20.5a4.5 4.5 0 01-.1-1.1h-8.5zM8.6 44.9c-.5 9.7 2.9 16.3 8.6 20.5V43.8H8.8a5.2 5.2 0 00-.2 1.1zm35.6-1.1v6.1a8.5 8.5 0 010 14.4V71a42.4 42.4 0 009-1.4V43.8zm-13 13.3a8.5 8.5 0 014-7.2v-6.1h-9v25.8a42.4 42.4 0 009 1.4v-6.7a8.5 8.5 0 01-4-7.2zM12.8 16a25 25 0 01.2 8.6h8.8v7.9h8.6v-7.9h9.2V16h-9.2V7.3l-3-1.6a19.7 19.7 0 01-5.6 2.2V16zm45.3 16.5V8.1a18.1 18.1 0 01-3.1-.9v25.4h3.1zm-12.4 0V8.4a15.5 15.5 0 01-3.1.6v23.5zm18.5 0V8.7l-3.1-.2v24zm-12.3 0V5.7l-3.1 1.6v25.2z'></path>
                    <path d='M79.3 40l-1.1-1.3c-5-5.2-12.1-18.3-3.1-30.3l.7-.9-3.4-4.8-1.2.4a18.4 18.4 0 01-5.6 1c-5.2 0-8.6-.5-12.8-3.3l-1-.6-1 .7a18.8 18.8 0 01-11.1 3.6A18.9 18.9 0 0128.5.7l-1-.7-1 .6c-4.2 2.8-7.6 3.3-12.8 3.3a16.2 16.2 0 01-5.6-1l-1.2-.4-3.4 4.8.7.9c9.1 12.3 2 25.3-3 30.5L0 39.9l1.2 1.3L3.9 44v.6c-.5 8.8 1.8 16 6.7 21.4s13.4 9.2 23.1 9.7c2.4 2.2 4.8 4 4.9 4.1l1 .8 1-.8c.1-.1 2.5-1.9 4.9-4.1 9.7-.5 17.8-4 23.1-9.7s7.2-12.6 6.7-21.3V44l2.7-2.8zm-5.7 3.4c.1.9 0 .8.1 1.4 1 19.4-12.5 28.5-28.8 29.2-2.5 2.3-5.2 4.4-5.2 4.4a54.4 54.4 0 01-5.3-4.4c-16.3-.7-29.8-9.9-28.8-29.3.1-.5 0-.5.1-1.4l-3.3-3.4c5.9-6.1 12.7-20 3.2-32.6l2-2.7a17.8 17.8 0 006.1 1.1c5.4 0 9.2-.5 13.7-3.6a20.8 20.8 0 0012.2 4.1 20.8 20.8 0 0012.2-4.1c4.6 3 8.3 3.6 13.7 3.6a17.8 17.8 0 006.1-1.1l2 2.7c-9.5 12.6-2.7 26.5 3.2 32.6z'></path>
                    <path d='M8.4 43.8a1.1 1.1 0 01-.1.6 1.1 1.1 0 01-.1.5c-.4 7.5 1.5 13.5 5.5 17.9s12.2 8 21.8 8.4h8.1c9.6-.4 17.1-3.3 21.8-8.4s5.9-10.5 5.5-18c0-.3 0-.4-.1-.5a1.5 1.5 0 00-.1-.6v-.2H8.5zm.4 1.2a.7.7 0 01.1-.5.8.8 0 01.1-.4h61.4c0 .2 0 .3.1.4a1.1 1.1 0 00.1.5c.4 7.3-1.4 13.2-5.4 17.6s-12 7.8-21.4 8.2h-8.1c-9.5-.4-16.9-3.3-21.5-8.3S8.4 52.3 8.8 45zm1.7-12.6l-.2.4h58.6l-.2-.4c-2.5-5.8-4.5-14.7.9-23.9l.3-.5h-.6a25.8 25.8 0 01-3.9.4c-5.2 0-9.1-.5-13.5-3h-.2A23.5 23.5 0 0139.6 9a22.3 22.3 0 01-12.1-3.5h-.2c-4.4 2.5-8.3 3-13.5 3a16.9 16.9 0 01-3.8-.4h-.6l.3.5c5.3 9.1 3.4 18 .8 23.8zM39.8 9.5A23.2 23.2 0 0051.9 6c4.5 2.5 8.4 3 13.7 3a19.5 19.5 0 003.4-.3c-5 9-3.3 17.7-.8 23.5H39.8zm-29.5-.8l3.4.3c5.3 0 9.2-.5 13.7-3a23.5 23.5 0 0011.9 3.5v22.7H11.2c2.4-5.8 4.2-14.5-.9-23.5zm22 27.2v-1.7h-5.8v8h1.7v-3.3h2.4v-1.7h-2.4v-1.3h4.1zm6.8-.1a1.6 1.6 0 011.4.8l1.6-.7a3.1 3.1 0 00-3-1.8c-2.1 0-3.6 1.7-3.6 4.1s1.4 4.1 3.5 4.1a3.1 3.1 0 003-1.8l-1.5-.9a1.6 1.6 0 01-1.5 1c-1.1 0-1.8-1-1.8-2.4s.8-2.4 1.9-2.4zm13.4.5c0-1.4-1-2.2-2.6-2.2h-3.7v8h3.7c1.8 0 2.9-1 2.9-2.6a1.8 1.8 0 00-1-1.7 1.6 1.6 0 00.7-1.5zm-4.5-.5h1.9c.8 0 .9.4.9.7a.7.7 0 01-.8.7h-2zm2 4.7h-2v-1.8h2c.7 0 1 .3 1 .9s-.4.9-1 .9z'></path>
                    <path d='M39.6 65.7a8.7 8.7 0 10-8.7-8.7 8.7 8.7 0 008.7 8.7zm0-.5a8.1 8.1 0 01-4.6-1.4 12.4 12.4 0 005.4-1.4c1.4-.8 2.8-1.8 3.1-3.2a2.2 2.2 0 013.2 1.7 7.9 7.9 0 01-7.1 4.3zm-4-6.3a3.3 3.3 0 001.5.5 2.9 2.9 0 002.8-2.3 1.9 1.9 0 013.1.8c.7 1.7-.8 2.9-2.7 4.1a12.9 12.9 0 01-5.8 1.3 9.7 9.7 0 01-2.2-2.7h.2a3.4 3.4 0 003.1-1.7zm-1.3-4.1a17 17 0 01.8-4.5 8.2 8.2 0 013.8-1.3 2.4 2.4 0 00.2 3.3l-.6.7a3.2 3.2 0 00.8 4.3 2.3 2.3 0 01-2.3 1.8c-1.8-.4-2.7-2.2-2.7-4.3zm9.4 3.9a2.9 2.9 0 00-.2-.9 2.4 2.4 0 00-3.8-1 2.6 2.6 0 01-.7-3.6c.9-1.5 3.1-.9 5.1.2a8.3 8.3 0 013.7 4.4 10.2 10.2 0 01-.6 2.5 2.7 2.7 0 00-3.5-1.6zm.5-5.8c-1.4-.8-3.3-1.5-4.6-1a1.8 1.8 0 01.1-3.1 8.2 8.2 0 018.1 7.7 10.3 10.3 0 00-3.6-3.6zm-9.7-2.2a10.5 10.5 0 00-.4 1.7c-.4 1.9-.4 4.8 1.1 6.2a2.8 2.8 0 01-2.7 1.5h-.4a7.8 7.8 0 01-.6-3.1 8 8 0 013-6.3z'></path>
                  </svg>
                  Register
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='flex-1 border-t border-[#29283d] border-solid bg-[#181733]'></div>
      </div>
      <div className='h-2 lg:h-12 bg-gradient-to-r from-[#cd122d] to-[#154284]'></div>
    </div>
  );
}

export default NavBar;
