import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className='py-8'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='mx-auto max-w-lg p-14'>
            <h1 className='mb-12 block font-rbtcondensed text-5xl font-extrabold'>
              Login
            </h1>
            <form action=''>
              <label
                htmlFor=''
                className='mb-3 block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                Email
              </label>
              <input
                type='text'
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <div className='mb-3 flex items-center justify-between'>
                <label
                  htmlFor=''
                  className='block font-rbtcondensed text-[17px] font-semibold text-gray-800'>
                  Password
                </label>
                <Link
                  to=''
                  className='font-rbtcondensed font-semibold text-blue-600'>
                  Forgot Password?
                </Link>
              </div>
              <input
                type='password'
                className='mb-7 w-full rounded-sm border border-gray-200 py-2 px-3 focus:outline-blue-500'
                required
              />
              <button className='text-bold w-full rounded-md bg-black py-3 px-4 font-rbtcondensed text-lg font-bold text-white'>
                SIGN IN
              </button>
            </form>
            <p className='mt-4 font-rbtcondensed'>
              Didn't have an account?{" "}
              <Link to='/account/signup' className='font-bold text-blue-600'>
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
