import React, { useState } from "react";
import "../login/Profile.css";
import Welcome from "./Welcome";

export default function Login(props) {
  // const [emaillog, setEmaillog] = useState("");
  // const [passwordlog, setPasswordlog] = useState("");
   const [flag, setFlag] = useState(false);
   const [home, setHome] = useState(true);

  const [login,setLogin] = useState({
    emial:"",
    password:""
  })

  function LoginForm(event) {
    event.preventDefault();
    let logindata = localStorage.getItem("loginDetails");
  

    if (login=== logindata) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <>
          <form className="SignIn" onSubmit={LoginForm}>
            <label htmlFor="">Email Id:</label>
            <input
              onChange={(event) => setEmaillog(event.target.value)}
              type="email"
              placeholder="Email"
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(event) => setPasswordlog(event.target.value)}
              placeholder="Password"
            />
            <button type="submit" onClick={LoginForm}>
              Login
            </button>
          </form>
          <button
            style={{ width: "100%" }}
            onClick={() => {
              props.toggleForm();
            }}
          >
            don't have an account?
          </button>
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
}
