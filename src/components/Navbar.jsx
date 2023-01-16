import React, { useState } from "react";
import "../styles/Navbar.css";
import { CiUser } from "react-icons/ci";
import { AiOutlineMobile } from "react-icons/ai";
import logo from "./utils/images/meeshologo.png";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import Profile from "./login/Profile";
import Overlay from "./overlay/Overlay";
import SignInForm from "./login/SignInForm";

export default function Navbar() {
  const [flag, setFlag] = useState(false);
  const ChangeTheState = () => {
    setFlag(true);
  };

  const OverStatus = () => {
    setFlag(false);
  };

  return (
    <>
      <div className="main-nav">
        <div className="meesho-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <button className="search-icon">
            <BsSearch />
          </button>
          <input
            type="text"
            placeholder="Try Saari,Kurti or Search by Product Code"
          />
        </div>
        <div className="dwl-app">
          <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
          <h3> Download App</h3>
        </div>
        <div className="supplier">
          <h3>Become a Supplier</h3>
        </div>
        <div className="profile">
          <div>
            <CiUser className="profile-logo" />
            <div>
              <h3>Profile</h3>
              <Profile stateCallBack={ChangeTheState} />
            </div>
          </div>
        </div>
        <div className="cart">
          <div>
            <BsCart2 className="cart-logo" />
            <h3>Cart</h3>
          </div>
        </div>
      </div>
      {flag && (
        <Overlay OverStatus={OverStatus}>
          <SignInForm />
        </Overlay>
      )}
    </>
  );
}
