import React from "react";
import "../login/style.scss";
const Forgot: React.FC = () => {
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
      <div className="d-flex justify-content-center w-sm-50 w-100 ">
        <img className="image-logo" src={"/assets/image/logo.svg"} alt="" />
      </div>
      <div className="d-flex justify-content-center w-sm-50 w-100 p-3">
        <div className="content-login d-flex flex-column w-100">
          <div className="custom-div d-flex flex-column">
            <h1 className="heading-1 fs-lg-28 m-0">Forgot password 🔑</h1>
            <p className="custom-paragraph m-0">
              Please Enter the email you use to sign up.
            </p>
          </div>
          <form className="form d-flex flex-column">
            <div className="custom-form-group form-group d-flex flex-column ">
              <label
                className="custom-label d-none d-lg-block font-size-14"
                htmlFor="exampleInputEmail1"
              >
                Email
              </label>

              <div className="d-none d-lg-block">
                <input
                  type="email"
                  className="custom-input  form-control rounded  "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
              </div>
              <label
                className="custom-label d-lg-none d-flex  "
                htmlFor="exampleInputEmail1"
              >
                Phone Number
              </label>
              <div className="d-lg-none d-flex">
                <div className="input-group  d-lg-none d-flex position-relative">
                  <img
                    className="icone-pays d-flex"
                    src={"/assets/Icon/India Flag.svg"}
                    alt=""
                  />
                  <input
                    className="custom-input rounded form-control w-100 px-5 py-2"
                    type="tel"
                    id="phone-number"
                    placeholder="91+ | 9265891*****"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="boutton">
            <button
              type="button"
              className="custom-btn-log"
            >
              Send link <a href="reset-password"></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
