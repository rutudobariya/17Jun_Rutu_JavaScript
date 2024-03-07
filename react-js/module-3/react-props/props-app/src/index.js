import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
// import Add from './components/Add';
// import Name from './components/Add';
// import EmployeeDetails from './components/Employee';
import CardDetails from './components/CardDetails';
import 'bootstrap/dist/cbootstrap.min.cssss/';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Name name="brijesh" /> */}
   {/* <EmployeeDetails details="hey i am just senior manager of Infosys" />
   */}

   {/* card details */}
  <CardDetails />
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





