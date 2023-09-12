import React, { useState, MouseEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import heplIcon from "../../assets/images/info.png";
import type { AppDispatch, RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../services/auth/authSlice";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  isLogin?: boolean;
  email: string;
}

function LoginRegist(props: LoginProps) {
  const { isLogin, email } = props;
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [hidenPass, setHidenPass] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, isSuccess } = useSelector(
    (state: RootState) => state.auth
  );
  const onChangePass = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value.trim());
  };

  useEffect(() => {
    if (isError) setError(true);

    if (isSuccess) {
      setError(false);
      navigate("/");
    }

    dispatch(reset());
  }, [isLoading, isError, isSuccess, dispatch]);
  console.log(isError);
  const onLogin = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    if (isLogin) {
      await dispatch(login({ email, password }));
    } else {
      console.log(event);
    }
  };

  return (
    <>
      <div>
        <p className='text-3xl font-[700] text-center text-[#fdc52c] italic mb-8 '>
          {isLogin ? "Hello Culer!" : "Set up your password"}
        </p>
        <p className='text-sm font-normal text-white mb-5'>Your Email:</p>
        <p className='text-sm font-normal text-white mb-8'>{email}</p>
        <div className='relative mb-8'>
          <input
            placeholder='Password'
            className={`input ${error && "border-[#ff4264]"}`}
            name='text'
            value={password}
            onChange={onChangePass}
            type={hidenPass ? "text" : "password"}
          />
          {error && (
            <p className='mt-2 text-[#ff4264] text-sm'>Invalid email format</p>
          )}
          <button
            className='absolute right-3 top-[13px]'
            onClick={() => setHidenPass(!hidenPass)}
          >
            {hidenPass ? (
              <svg
                className='w-[22px] h-[18px]'
                focusable='false'
                data-key='hide'
                aria-hidden='true'
                viewBox='0 0 52 52'
                fill='#52ffff'
              >
                <g>
                  <g>
                    <path d='M51.8 25.1c-1.6-3.2-3.7-6.1-6.3-8.4L37 25.1v.9c0 6.1-4.9 11-11 11h-.9l-5.4 5.4c2 .4 4.1.7 6.2.7 11.3 0 21.1-6.6 25.8-16.1.4-.7.4-1.3.1-1.9zM48.5 5.6l-2.1-2.1c-.6-.6-1.7-.5-2.4.3l-7.3 7.3C33.4 9.7 29.8 9 26 9 14.7 9 4.9 15.6.2 25.1c-.3.6-.3 1.3 0 1.8 2.2 4.5 5.5 8.2 9.6 11l-6 6.1c-.7.7-.8 1.8-.3 2.4l2.1 2.1c.6.6 1.7.5 2.4-.3L48.2 8c.8-.7.9-1.8.3-2.4zM15 26c0-6.1 4.9-11 11-11 2 0 3.8.5 5.4 1.4l-3 3c-.8-.2-1.6-.4-2.4-.4-3.9 0-7 3.1-7 7 0 .8.2 1.6.4 2.4l-3 3C15.5 29.8 15 28 15 26z'></path>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                className='w-[22px] h-[18px]'
                focusable='false'
                data-key='preview'
                aria-hidden='true'
                viewBox='0 0 52 52'
                fill='#52ffff'
              >
                <g>
                  <g>
                    <path d='M51.8 25.1C47.1 15.6 37.3 9 26 9S4.9 15.6.2 25.1c-.3.6-.3 1.3 0 1.8C4.9 36.4 14.7 43 26 43s21.1-6.6 25.8-16.1c.3-.6.3-1.2 0-1.8zM26 37c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z'></path>
                    <path d='M26 19c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z'></path>
                  </g>
                </g>
              </svg>
            )}
          </button>
        </div>

        {isLogin ? (
          <>
            <div className='text-right text-sm text-[#4a8aeb] underline decoration-1 hover:no-underline	'>
              <Link to='/forgot-password-email'>Forgot Password?</Link>
            </div>
            <div className='mt-4 mb-10 flex flex-row justify-between items-center'>
              <div className='checkbox-wrapper mb-1'>
                <input id='terms-checkbox-37' name='checkbox' type='checkbox' />
                <label className='terms-label' htmlFor='terms-checkbox-37'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 200 200'
                    className='checkbox-svg'
                  >
                    <mask fill='white' id='path-1-inside-1_476_5-37'>
                      <rect height='200' width='200'></rect>
                    </mask>
                    <rect
                      mask='url(#path-1-inside-1_476_5-37)'
                      stroke-width='40'
                      className='checkbox-box'
                      height='200'
                      width='200'
                    ></rect>
                    <path
                      stroke-width='15'
                      d='M52 111.018L76.9867 136L149 64'
                      className='checkbox-tick'
                    ></path>
                  </svg>
                  <span className='label-text text-white text-sm'>
                    Keep me logged in
                  </span>
                </label>
              </div>
              <div className='group relative'>
                <img
                  src={heplIcon}
                  alt=''
                  className='w-5 float-right invert-[1]  relative cursor-pointer'
                />
                <div className='absolute right-0 top-6 w-[298px] flex bg-white px-3 py-2 rounded-md invisible group-hover:visible'>
                  <p className='text-sm leading-4'>
                    We will remember your password so you can log in faster next
                    time.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-row mb-4'>
              <div className='flex flex-row gap-4 items-center flex-1'>
                <div className='toggle-switch'>
                  <input
                    className='toggle-input'
                    id='toggle-2'
                    type='checkbox'
                  />
                  <label className='toggle-label' htmlFor='toggle-2'></label>
                </div>
                <p className='text-sm font-normal text-white flex-1 mr-2'>
                  Keep me posted on all Barça information and updates
                </p>
              </div>
              <button>
                <svg
                  className='w-[17px] h-6'
                  focusable='false'
                  data-key='chevronup'
                  aria-hidden='true'
                  viewBox='0 0 52 52'
                  fill='white'
                >
                  <g>
                    <path d='M4.4 34.2l20.5-20.7c.6-.6 1.6-.6 2.2 0l20.5 20.7c.6.6.6 1.6 0 2.2l-2.2 2.2c-.6.6-1.6.6-2.2 0L27.1 22.2c-.6-.6-1.6-.6-2.2 0L8.8 38.5c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.5-.6-.5-1.5 0-2.1z'></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className='ml-3'>
              <div className='mb-4'>
                <div className='checkbox-wrapper mb-1'>
                  <input
                    id='terms-checkbox-37'
                    name='checkbox'
                    type='checkbox'
                  />
                  <label className='terms-label' htmlFor='terms-checkbox-37'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 200 200'
                      className='checkbox-svg'
                    >
                      <mask fill='white' id='path-1-inside-1_476_5-37'>
                        <rect height='200' width='200'></rect>
                      </mask>
                      <rect
                        mask='url(#path-1-inside-1_476_5-37)'
                        stroke-width='40'
                        className='checkbox-box'
                        height='200'
                        width='200'
                      ></rect>
                      <path
                        stroke-width='15'
                        d='M52 111.018L76.9867 136L149 64'
                        className='checkbox-tick'
                      ></path>
                    </svg>
                    <span className='label-text text-white text-base'>
                      Culers Newsletter
                    </span>
                  </label>
                </div>
                <p className='text-sm text-[#cecece]'>
                  I'd like to receive the personalized newsletter adapted to my
                  preferences
                </p>
              </div>
              <div className='mb-4'>
                <div className='checkbox-wrapper mb-1'>
                  <input
                    id='terms-checkbox-37'
                    name='checkbox'
                    type='checkbox'
                  />
                  <label className='terms-label' htmlFor='terms-checkbox-37'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 200 200'
                      className='checkbox-svg'
                    >
                      <mask fill='white' id='path-1-inside-1_476_5-37'>
                        <rect height='200' width='200'></rect>
                      </mask>
                      <rect
                        mask='url(#path-1-inside-1_476_5-37)'
                        stroke-width='40'
                        className='checkbox-box'
                        height='200'
                        width='200'
                      ></rect>
                      <path
                        stroke-width='15'
                        d='M52 111.018L76.9867 136L149 64'
                        className='checkbox-tick'
                      ></path>
                    </svg>
                    <span className='label-text text-white text-base'>
                      Culers Newsletter
                    </span>
                  </label>
                </div>
                <p className='text-sm text-[#cecece]'>
                  I'd like to receive the personalized newsletter adapted to my
                  preferences
                </p>
              </div>
            </div>
            <div className='flex flex-row mb-4'>
              <div className='flex flex-row gap-4 items-center flex-1'>
                <div className='toggle-switch'>
                  <input className='toggle-input' id='toggle' type='checkbox' />
                  <label className='toggle-label' htmlFor='toggle'></label>
                </div>
                <p className='text-sm font-normal text-white mr-2 '>
                  I'm a Barça Member.
                </p>
              </div>
              <button>
                <svg
                  className='w-[17px] h-6'
                  focusable='false'
                  data-key='chevronup'
                  aria-hidden='true'
                  viewBox='0 0 52 52'
                  fill='white'
                >
                  <g>
                    <path d='M4.4 34.2l20.5-20.7c.6-.6 1.6-.6 2.2 0l20.5 20.7c.6.6.6 1.6 0 2.2l-2.2 2.2c-.6.6-1.6.6-2.2 0L27.1 22.2c-.6-.6-1.6-.6-2.2 0L8.8 38.5c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.5-.6-.5-1.5 0-2.1z'></path>
                  </g>
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
      <button className='button bg-[#cf122d]' onClick={onLogin}>
        {isLogin ? "LOG IN" : "SIGN UP"}
      </button>
    </>
  );
}

export default LoginRegist;
