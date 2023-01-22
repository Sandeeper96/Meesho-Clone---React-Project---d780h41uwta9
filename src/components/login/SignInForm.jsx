import React, { useState } from "react";

import "../login/Profile.css";

export default function SignInForm(props) {
 
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  

  const loginFunction = (e) => {
    e.stopPropagation();
    
  };

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  let loginInfo;
  if (localStorage.getItem("userInfo") === null) {
    loginInfo = [];
  } else {
    loginInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  const submitHandler = (e) => {
    e.preventDefault();


    if (userName !== "" && password !== "" && email !== "") {
      const storeToLocal = {
        userName,
        email,
        password,
      };
      
      if (
        loginInfo.some(
          (info) =>
            info.userName === storeToLocal.userName ||
            info.email === storeToLocal.email
        )
      ) {
        setInfoExist(true);
        return;
      } else {
        loginInfo.push(storeToLocal);
        localStorage.setItem("userInfo", JSON.stringify(loginInfo));
      }
    }
    setUserName("");
    setPassword("");
    setEmail("");
    props.flagSet();
  };
  return (
    <>
      <form className="SignIn" onSubmit={submitHandler}>
        <label htmlFor="">User Name:</label>
        <input
          type="text"
          placeholder="user name"
          value={userName} name="name"
          onChange={userInputHandler}
        />
        <label htmlFor="">Email Id:</label>
        <input
          value={email} name="email"
          onChange={emailInputHandler}
          type="email"
          placeholder="Email"
        />
        <label htmlFor="">Password</label>
        <input name="password"
          value={password}
          onChange={passwordInputHandler}
          type="password"
          placeholder="Password"
        />
        <button type="submit">
          Sign Up
        </button>
      </form>
      <button
        onClick={() => {
          props.toggleForm();
        }}
      >
        Have an account already?
      </button>
    </>
  );
}
