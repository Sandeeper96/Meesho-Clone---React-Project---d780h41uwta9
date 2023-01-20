import React, { useState } from "react";

import "../login/Profile.css";

export default function SignInForm(props) {
  // const [login, setLogin] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const signUpForm = () => {
  //   let loginData = localStorage.getItem("loginDetails");
  //   if (loginData == null) {
  //     loginData = [];
  //     loginData.push(login);
  //     localStorage.setItem("loginDetails", JSON.stringify(loginData));
  //   } else {
  //     let data = JSON.parse(loginData);
  //     data.push(login);
  //     localStorage.setItem("loginDetails", JSON.stringify(data));
  //   }
  // };

  // const SignForm = (event) => {
  //   event.preventDefault();
  // };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [userFlag, setUserFlag] = useState(false);
  // const [emailFlag, setEmailFlag] = useState(false);
  // const [passwordFlag, setPasswordFlag] = useState(false);
  // const [infoExist, setInfoExist] = useState(false);

  const loginFunction = (e) => {
    e.stopPropagation();
    // props.flagSet();
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

    // setUserFlag(false);
    // setEmailFlag(false);
    // setPasswordFlag(false);
    // setInfoExist(false);

    // if (userName === "") {
    //   setUserFlag(true);
    //   return;
    // }

    // if (email === "") {
    //   setEmailFlag(true);
    //   return;
    // }

    // if (password === "") {
    //   setPasswordFlag(true);
    //   return;
    // }

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
          Sign In
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
