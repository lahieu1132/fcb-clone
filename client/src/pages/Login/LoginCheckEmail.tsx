import React, { SyntheticEvent, useEffect, useState } from "react";
import { checkEmail, reset } from "../../services/auth/authSlice";
import type { AppDispatch, RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
interface LoginProps {
  setIsRegist: () => void;
  checkedEmail: (e: string) => void;
  setIsLogin: (e: boolean) => void;
}

function LoginCheckEmail(props: LoginProps) {
  const { setIsRegist, checkedEmail, setIsLogin } = props;
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, isSuccess } = useSelector(
    (state: RootState) => state.auth
  );
  const onSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    // Your logic here
    dispatch(checkEmail(email));
  };

  useEffect(() => {
    if (isSuccess) {
      setIsRegist();
      checkedEmail(email);
      setIsLogin(true);
    }
    if (isError) {
      setIsRegist();
      checkedEmail(email);
      setIsLogin(false);
    }
    dispatch(reset());
  }, [isError, isSuccess, dispatch]);

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
            style={{ borderColor: isError ? "#ff4264" : "" }}
            name='text'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isError && (
            <p className='mt-2 text-[#ff4264] text-sm'>Invalid email format</p>
          )}
        </div>
        <button
          type='submit'
          className='button bg-[#cf122d]'
          disabled={isLoading}
        >
          LOG IN
        </button>
      </form>
    </>
  );
}

export default LoginCheckEmail;
