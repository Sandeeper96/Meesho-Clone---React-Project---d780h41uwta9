import React, { useState } from 'react'
import Navbar from './Navbar'
import Navproduct from './NavProduct/Navproduct'
import Product from './product/Product'

function Home() {
  const [input, setInput] = useState("");


  const SearchProduct=(arg)=>{
    console.log(arg);
    setInput(arg)

  }
  return (
    <>
    <Navbar SearchProduct={SearchProduct}/>
    <Navproduct/>
    <Product searchData={input}/>
    </>
  )
}

export default Home