import React from 'react';
import {Container,Row,Form,Button,Nav,Navbar} from 'react-bootstrap';

export default function NavbarApp() {
  return (
    <div>
    <Nav className='nav navbar navbar-expand-md bg-dark'>
      <a href='#' className='text-white navbar-brand ms-5'>NavbarApp</a>
      <Button type="button" className='navbar-toggler btn btn-sm bg-dark border border-0' data-bs-toggle="collapse" data-bs-target="#togg">
      <span className='bi bi-grid text-white p-3'></span>
      </Button>
      <div className='collapse navbar-collapse' id="togg">
      <ul className='nav-link ms-5'>
      <li className='nav-item'><a href='#'>Electronics</a></li>
      <li className='nav-item'><a href='#'>Kids</a></li>
      <li className='nav-item'><a href='#'>Mens</a></li>
      <li className='nav-item'><a href='#'>Womens</a></li>
      <li className='nav-item'><a href='#'>Blogs</a></li>
      <li className='nav-item'><a href='#'>Offerzone</a></li>
      <li className='nav-item'><a href='#'>Contact</a></li>
      
      </ul> 
      </div>
    </Nav>
    </div>
  )
}
