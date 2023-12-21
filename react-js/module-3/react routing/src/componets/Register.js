import React from 'react'
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div>
    <section className='content'>
    <h1 className='text-center text-5xl text-slate-950'>Register Form</h1>
    <center>
    <form className='m-5  p-2'>
       
      <input type='text' placeholder='Email'  />
      <br /><br />
       
      <input type='password' placeholder='Password'  />
      <br /><br /> 
      
       
      <input type='text' placeholder='phone'  />
      <br /><br />
      <button className='bg-slate-900 text-white p-2'>
      <input type='submit' value="Register"  />
      </button>
      <br /><br />
      
    <b>Already have an Account ? <Link to='/login-us'>Login here</Link></b>

      
    
    </form>
    </center>
    </section>
    </div>
  )
}
