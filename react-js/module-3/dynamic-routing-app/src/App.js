import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UserDetails from './UserDetails';
import PageNotFound from './PageNotFound';
// import EmployeeList from './EmployeeList';


import './App.css';

function App() {
  // Define user data as an array of objects
    const users = ["rutu", "dhevan", "radhika"];
   

  return (
    <div>
      <Container className='p-5 mx-auto shadow-md mt-5 '>
        <h1 className='ms-5'>User dynamic load Using React router-dom</h1>      
        <div className='p-5 m-5 flex  gap-5 bg-warning-subtle w-100 mx-auto ' >
          {users.map((user) => (
            <Link to={`users/${user}`} className='m-1 p-4'>{user}</Link>
          ))}
        </div>
        {/* get dynamic users information to navigate */}
        <Routes>
          <Route path='users/:userId' element={<UserDetails/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </div>
  );
}



export default App;
