import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Detail from "./details/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment"
const App = () => {
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<><Navbar/><Detail /></>} />
          <Route path="/cardcrad" element={<><Navbar/><Cart/></>}/>
          <Route path="/payment" element={<><Navbar/><Payment/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
