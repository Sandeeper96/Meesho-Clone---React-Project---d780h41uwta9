import React from 'react'

export default function Login(props) {

    const LoginForm=(event)=>{

        event.preventDefault();
    }

  return (
    <>
    <form className='login-page' onSubmit={LoginForm}>
    <label htmlFor="">Email Id:</label>
    <input type="email" placeholder='Email'/>
    <label htmlFor="">Password</label>
    <input type="password" placeholder='Password' />
    <button type='submit'>Sign In</button>
    </form>
    <button onClick={props.onFormSwitch}>don't have an account?</button>
    </>
  )
}
