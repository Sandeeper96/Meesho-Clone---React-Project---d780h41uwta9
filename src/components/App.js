import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Login from "./login/Login";
import SignInForm from "./login/SignInForm";
import Navbar from "./Navbar";
import Navproduct from "./NavProduct/Navproduct";
import Product from "./product/Product";
const App = () => {
  const [currenform , setCurrentform] = useState('login');

  const toggleForm=()=>{
    setCurrentform(formName);
  }

  return (
    <div>
    {
      currenform === "login" ? <Login onFormSwitch={toggleForm} /> : <SignInForm  onFormSwitch={toggleForm} />
    }

    <div>

    </div>
      
      <Navbar />
      <Navproduct />
      <Product/>
    </div>
  );
};

export default App;
