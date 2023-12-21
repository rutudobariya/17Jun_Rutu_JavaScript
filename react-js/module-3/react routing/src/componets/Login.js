import React from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div>
    <section className='content'>
    <h1 className='text-center text-2xl text-slate-950'>Login Form</h1>
    <center>
    <form className='m-5'>
       
      <input type='text' placeholder='Email'  />
      <br /><br />
       
      <input type='password' placeholder='Password'  />
      <br /><br /> 
      
       <button className='p-2 w-20 text-white bg-slate-900'>
      <input type='submit' value="Login"  />
      </button>
      <br /><br />
      
    <b>Don't have an Account ? <Link to='/create-account'>Register here</Link></b>

      
    
    </form>
    </center>
    </section>
    </div>
  )
}
