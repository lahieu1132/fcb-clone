import React, { SyntheticEvent, useState } from "react";

interface LoginProps {
  onSubmit: (e: SyntheticEvent) => void;
}

function LoginCheckEmail(props: LoginProps) {
  const { onSubmit } = props;
  const [error, setError] = useState(true);

  return (
    <>
      <p className='text-3xl font-extrabold text-center text-[#fdc52c] italic mb-8 '>
        Log in
      </p>
      <div className='relative my-8 mx-auto border-t text-center border-white border-solid z-0'>
        <span className='absolute  top-[-1.1rem] text-white whitespace-nowrap left-[20%] right-[20%] text-base  font-semibold  p-1 z-10 bg-[#181733]'>
          Log in with your email
        </span>
      </div>
      <form action='post' onSubmit={onSubmit} className='flex flex-col gap-4'>
        <div>
          <input
            placeholder='Your email'
            className='input'
            style={{ borderColor: error ? "#ff4264" : "" }}
            name='text'
            type='text'
          />
          {error && (
            <p className='mt-2 text-[#ff4264] text-sm'>Invalid email format</p>
          )}
        </div>
        <button type='submit' className='button bg-[#cf122d]'>
          LOG IN
        </button>
      </form>
    </>
  );
}

export default LoginCheckEmail;
