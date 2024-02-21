import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

interface HeaderProps {
  isShow?: boolean;
  setIsShow: Function;
}

interface HeaderMobileProps {
  setIsShow: Function;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ setIsShow }) => {
  return (
    <nav className="position-absolute top-0 bottom-0 start-0 p-4 d-flex flex-column align-items-center z-10 w-100 g-16 bg-white">
      <Link className="navbar-brand" to="/">
        <img
          src={"/assets/image/Group 9580.svg"}
          alt="Logo"
          style={{ height: "30px" }}
        />
      </Link>
      <div className="d-flex flex-column align-items-center ">
        <img
          src="/assets/image/user-smile.png"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info text-center">
          <span className="user-name">Vijay Lakshmi</span>
          <span className="user-organization">Organization</span>
        </div>
        <img
          src={"/assets/Icon/Back.svg"}
          alt="Back"
          onClick={() => setIsShow(false)}
        />
      </div>
    </nav>
  );
};

const HeaderDesktop: React.FC = () => {
  return (
    <nav className="navbar d-none d-md-flex justify-content-between align-items-center header navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <img
          src={"/assets/image/Group 9580.svg"}
          alt="Logo"
          style={{ height: "30px" }}
        />
      </Link>
      <div className="user-container">
        <img
          src="/assets/image/user-smile.png"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">Vijay Lakshmi</span>
          <span className="user-organization">Organization</span>
        </div>
        <img src="/assets/Icon/Down Arrow.svg" alt="User Avatar" />
      </div>
    </nav>
  );
};
const Header: React.FC<HeaderProps> = ({ isShow, setIsShow }) => {
  return (
    <>
      <HeaderDesktop />
      {isShow && <HeaderMobile setIsShow={setIsShow} />}
    </>
  );
};

export default Header;
