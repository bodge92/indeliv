import React from "react";
import "../login/style.scss";
const Reset: React.FC = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center vh-100 fs-14 fw-normal flex-lg-row flex-column justify-content-lg-between">
      <div className="d-none d-lg-block full-screen-background"></div>
      <div>
        <img
          className="d-none d-lg-block position-absolute top-0 left-0 m-3"
          src={"/assets/image/Group 9580.svg"}
          alt=""
        />
      </div>
      <div className="d-flex justify-content-center w-sm-50 w-100">
        <img className="image-logo" src={"/assets/image/logo.svg"} alt="" />
      </div>
      <div className="d-flex justify-content-center w-sm-50 w-100 p-3">
        <div className="content-login d-flex flex-column  w-100">
          <div className="custom-div d-flex flex-column">
            <h1 className="heading-1 fs-lg-28 m-0">
              Reset your password
            </h1>
            <p className="custom-paragraph m-0">
              Strong passwords include numbers, letters, and puctation marks.
            </p>
          </div>

          <form className="form d-flex flex-column">
            <div className="form-group ">
              <div className="position-relative custom-form-group form-group d-flex flex-column">
                <label className="custom-label" htmlFor="exampleInputPassword1">
                  Enter New password
                </label>
                <input
                  type="password"
                  className="rounded custom-input form-control"
                  id="exampleInputPassword1"
                  placeholder="********"
                />
                <img
                  src={"/assets/image/Hide.svg"}
                  alt=""
                  className="vision-enter"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="position-relative custom-form-group form-group d-flex flex-column">
                <label className="labeL" htmlFor="exampleInputPassword1">
                  Confirm new password
                </label>
                <input
                  type="password"
                  className="rounded custom-input form-control"
                  id="exampleInputPassword1"
                  placeholder="********"
                />
                <img
                  src={"/assets/image/Hide.svg"}
                  alt=""
                  className="vision-confirm"
                />
              </div>
            </div>
          </form>
          <button
            type="button"
            className="custom-btn-log w-100"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reset;
