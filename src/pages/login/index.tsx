import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='d-flex justify-content-evenly align-items-center vh-100 fs-14 fw-normal flex-lg-row flex-column justify-content-lg-between '>
      <div className='d-none d-lg-block full-screen-background'></div>
      <div>
        <img
          className='d-none d-lg-block position-absolute top-0 start-0  m-3'
          src={'/assets/image/Group 9580.svg'}
          alt=''
        />
      </div>
      <div className='  d-flex justify-content-center  w-100'>
        <img className='image-logo' src={'/assets/image/logo.svg'} alt='' />
      </div>
      <div className='d-flex justify-content-center  w-100 p-3'>
        <div className='content-login d-flex flex-column  w-100'>
          <div className='custom-div d-flex flex-column'>
            <h1 className='heading-1 fs-lg-28 m-0'>Welcome!</h1>
            <p className='custom-paragraph m-0 '>
              Welcome! Please Enter your Details.
            </p>
          </div>
          <form className='form d-flex flex-column'>
            <div className='form-group custom-form-group form-group d-flex flex-column'>
              <label className='custom-label' htmlFor='exampleInputEmail1'>
                Name /Email
              </label>
              <input
                type='email'
                className='custom-input form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter your Name / Email'
              />
            </div>
            <div className='form-group'>
              <div className='password-input-container custom-form-group form-group d-flex flex-column position-relative'>
                <label className='custom-label' htmlFor='exampleInputPassword1'>
                  Password
                </label>
                <input
                  type='password'
                  className='custom-input rounded form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
                <img
                  src={'/assets/image/Hide.svg'}
                  alt=''
                  className='position-absolute top-73  end-2 translate-middle-y cursor-pointer'
                />
              </div>
            </div>
            <div className='custom-form-group  d-flex justify-content-between align-items-center mx-0 px-0'>
              <div className='d-flex gap-2 '>
                <input
                  type='checkbox'
                  className='custom-checkbox m-0'
                  id='exampleCheck1'
                />
                <label
                  className='custom-label-remember form-check-label'
                  htmlFor='exampleCheck1'
                >
                  Remember
                </label>
              </div>
              <a className='text12' href='forgot-password'>
                Forgot password?
              </a>
            </div>
          </form>
          <div className='d-flex align-items-center flex-column text-center'>
            <button type='button' className='custom-btn-log rounded   '>
              Log in
            </button>
            <div
              style={{ width: '90%' }}
              className=' d-none d-lg-flex align-items-center justify-content-center or-separator d-block text-center m-3 '
            >
              <span className='custom-span'>OR</span>
            </div>
            <div className='custom-btn-google d-flex w-100 align-items-center flex-column'>
              <button
                style={{ width: '90%' }}
                type='button'
                className='custom-btn rounde d-none d-lg-block '
              >
                <img
                  className='p-2'
                  src={'/assets/image/icon-google.svg'}
                  alt=''
                />
                Log in with google
              </button>

              <div className='custom-sign-up d-none d-lg-flex align-items-center justify-content-center'>
                Don't have an account yet?
                <div className='custom-sign-up-text'>
                  {' '}
                  <NavLink to={''}>Sign up</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
