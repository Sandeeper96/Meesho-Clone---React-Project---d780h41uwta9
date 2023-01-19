import React, { useState } from "react";

import "../login/Profile.css";

export default function SignInForm(props) {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpForm = () => {
    let loginData = localStorage.getItem("loginDetails");
    if (loginData == null) {
      loginData = [];
      loginData.push(login);
      localStorage.setItem("loginDetails", JSON.stringify(loginData));
    } else {
      let data = JSON.parse(loginData);
      data.push(login);
      localStorage.setItem("loginDetails", JSON.stringify(data));
    }
  };

  const SignForm = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form className="SignIn" onSubmit={SignForm}>
        <label htmlFor="">User Name:</label>
        <input
          type="text"
          placeholder="user name"
          value={login.name} name="name"
          onChange={(e) => {
            setLogin({ ...login, [e.target.name]: e.target.value });
          }}
        />
        <label htmlFor="">Email Id:</label>
        <input
          value={login.email} name="email"
          onChange={(e) => {
            setLogin({ ...login, [e.target.name]: e.target.value });
          }}
          type="email"
          placeholder="Email"
        />
        <label htmlFor="">Password</label>
        <input name="password"
          value={login.password}
          onChange={(e) => {
            setLogin({ ...login, [e.target.name]: e.target.value });
          }}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={signUpForm}>
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
