import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center vh-100 fs-14 fw-normal flex-lg-row flex-column justify-content-lg-between ">
      <div className="d-none d-lg-block full-screen-background"></div>
      <div>
        <img
          className="d-none d-lg-block position-absolute top-0 start-0  m-3"
          src={"/assets/image/Group 9580.svg"}
          alt=""
        />
      </div>
      <div className="  d-flex justify-content-center  w-100">
        <img className="image-logo" src={"/assets/image/logo.svg"} alt="" />
      </div>
      <div className="d-flex justify-content-center  w-100 p-3">
        <div className="content-login  w-100">
          <h1 className="titleH1 fs-lg-28 fw-bold">Welcome!</h1>
          <p className="text14">Welcome! Please Enter your Details.</p>
          <form>
            <div className="form-group mb-3">
              <label
                className="labeL font-size-14"
                htmlFor="exampleInputEmail1"
              >
                Name /Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Name / Email"
              />
            </div>
            <div className="form-group mb-3">
              <div className="password-input-container position-relative">
                <label
                  className="labeL font-size-14"
                  htmlFor="exampleInputPassword1"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="rounded form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <img
                  src={"/assets/image/Hide.svg"}
                  alt=""
                  className="position-absolute top-73  end-2 translate-middle-y cursor-pointer"
                />
              </div>
            </div>
            <div className="form-group form-check d-flex justify-content-between align-items-center mx-0 px-0">
              <div className="d-flex gap-2 ">
                <input
                  type="checkbox"
                  className="w-16 h-16 m-0"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember
                </label>
              </div>
              <a className="text12" href="forgot-password">
                Forgot password?
              </a>
            </div>
          </form>
          <div className="d-flex align-items-center flex-column text-center">
            <button
              type="button"
              className="rounded btn btn-primary btn-lg btn-block "
            >
              log in
            </button>
            <div className="d-none d-lg-block or-separator d-flex align-items-center justify-content-center text-center m-4">
              <span className="px-10">OR</span>
            </div>
            <button
              type="button"
              className="rounde d-none d-lg-block btn btn-secondary btn-sm"
            >
              <img
                className="p-2"
                src={"/assets/image/icon-google.svg"}
                alt=""
              />
              Log in with google
            </button>

            <div className="bouttonG d-none d-lg-block sign mt-4 w-lg-100">
              Don't have an account yet? <NavLink to={""}>Sign up</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
