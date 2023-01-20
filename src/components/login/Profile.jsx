import React, { useState } from 'react'
import '../login/Profile.css'


export default function Profile(props) {
 


  const LoginCondition=()=>{
    props.stateCallBack();
  }

  return (
    <>
    { props.loginflag  ? <div className='profile-bar'>{props.userdata}</div> : 

    <div className='profile-bar'>
    <h3>Hello User</h3>
    <p>To access your Meesho account</p>
    <button className='login' onClick={LoginCondition} >Login</button>
    </div>
    }
    </>

  )
}
