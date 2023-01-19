import React, { useState } from 'react'
import '../login/Profile.css'
import Navbar from '../Navbar';

export default function Login(props) {
  
  const [emaillog,setEmaillog] = useState("")
  const [passwordlog,setPasswordlog] = useState("")
  const [flag,setFlag] = useState(false);
  const [home,setHome] = useState(true);

  function LoginForm(event){
    event.preventDefault();
     let mail = localStorage.getItem("email")
     let pass = localStorage.getItem("password")

     if(!emaillog || passwordlog){
      setFlag(true);
      console.log("Emty");
     }else if(passwordlog!==pass || emaillog !== mail){
      setFlag(true)

     }else{
      setHome(!home);
      setFlag(false);
     }
  }





    

  return (
    <>
    { home ? (
    <form className='SignIn' onSubmit={LoginForm} >
    <label htmlFor="">Email Id:</label>
    <input onChange={(event)=>setEmaillog(event.target.value)} type="email" placeholder='Email'/>
    <label htmlFor="">Password</label>
    <input type="password" onChange={(event)=>setPasswordlog(event.target.value)} placeholder='Password' />
    <button type='submit' onClick={LoginForm} >Login</button>
    </form>
    ): (<Navbar/>)}
    <button onClick={()=>{props.toggleForm()}}>don't have an account?</button>
   
    </>
  )
}
