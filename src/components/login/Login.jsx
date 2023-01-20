import React, { useState } from "react";
import "../login/Profile.css";
import Welcome from "./Welcome";

export default function Login(props) {
  const [home ,setHome ] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [userFlag, setUserFlag] = useState(false);
  // const [passwordFlag, setPasswordFlag] = useState(false);
  // const [warningMsg,setWarningMsg] = useState(false)
  let loginInfo;

  loginInfo = JSON.parse(localStorage.getItem("userInfo"));

  const submitHandler = (e) => {
    e.preventDefault();
    // setUserFlag(false);
    // setPassword(false);
    // setWarningMsg(false);

    // if (userName === "") {
    //   setUserFlag(true);
    //   return;
    // }

    // if (password === "") {
    //   setPasswordFlag(true);
    //   return;
    // }

    if (userName !== "" && password !== "") {
      const storeToLocal = {
        userName,
        password,
      };
      let data;
      if (
        loginInfo.some(
          (info) =>
          {if((info.userName === storeToLocal.userName) && (info.password === storeToLocal.password)){
            data = info;
            return true;
          }}
          
        )
      ) {
        // props.stateUpLisft(data.userName);
        props.loginStatus(data.userName)
        setHome(!home)
      } else {
        setWarningMsg(true);
        return
      }
    }
    // props.functionCall();
  };

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div>
   { home ? (
    <div>
          <form className="SignIn" onSubmit={submitHandler}>
            <label htmlFor="">Email Id:</label>
            <input
              onChange={userInputHandler}
              type="name"
              placeholder="Name"
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={passwordInputHandler}
              placeholder="Password"
            />
            <button type="submit">
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
    
     
    </div>
    ) : (<Welcome/>)}
    </div>
   

  );
}
