import React from 'react'

import '../login/Profile.css'

export default function SignInForm() {

  const SignForm=(event)=>{
    event.preventDefault()
    

  }
  return (
    <>
    <form className='SignIn' onSubmit={SignForm}>
    <label htmlFor="">User Name:</label>
    <input type="text" placeholder='user name'/>
    <label htmlFor="">Email Id:</label>
    <input type="email" placeholder='Email'/>
    <label htmlFor="">Password</label>
    <input type="password" placeholder='Password' />
    <button type='submit'>Sign In</button>
    </form>
    <button>Have an account already?</button>
    </>

  )
}
