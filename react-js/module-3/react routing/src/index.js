import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './componets/Home'
import About from './componets/About'
import Services from './componets/Services'
import Register from './componets/Register';
import Login from './componets/Login';
import Contact from './componets/Contact';
import PageNotFound from './PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
            <Routes>
            <Route path='/' element={<Layout />}>
            <Route  index element={<Home />} />
            <Route path='about-us' element={<About />}/>
            <Route path='our-services' element={<Services />}/>
            <Route path='create-account' element={<Register />}/>
            <Route  path='login-us' element={<Login />} />
            <Route  path='contact-us' element={<Contact />} />
            <Route  path='*' element={<PageNotFound />} />

            </Route>
            
            </Routes>
            </BrowserRouter>
  
);

