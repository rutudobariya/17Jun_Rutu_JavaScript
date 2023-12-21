import React from 'react'
import {Outlet,Link} from 'react-router-dom'

export default function Layout() {
  return (
<div>
    <nav className='w-full h-auto bg-black p-5 md:flex flex-row items-center justify-between'>
        <div className='flex justify-between  items-center'>
    <ul className='sm:flex sm:flex-row gap-3'>
    <li className='text-xl text-slate-200 '><Link to='/'>Home</Link></li>
    <li className='text-xl text-slate-200 '><Link to='about-us'>About</Link></li>
    <li className='text-xl text-slate-200 '><Link to='our-services'>Services</Link></li>
    <li className='text-xl text-slate-200 '><Link to='create-account'>Account</Link></li>
    <li className='text-xl text-slate-200 '><Link to='contact-us'>Contact</Link></li>
    </ul>
    </div>
    </nav>
    <Outlet/>
    </div>
  )
}
 