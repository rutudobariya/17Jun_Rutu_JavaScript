import React from "react";
import ReactDOM from 'react-dom/client';
import ContainerApp from "./components/ContainerApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BtnApp from "./components/BtnApp";
import HeaderApp from "./components/HeaderApp";
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarApp from "./components/NavbarApp";
import './style.css';
import HeroApp from "./components/HeroApp";

const root=ReactDOM.createRoot(document.getElementById("root-app"));
root.render(

    <React.StrictMode>
     {/* <ContainerApp />
      <BtnApp/>

*/}

    <HeaderApp/>
    <NavbarApp />
    <HeroApp />

    </React.StrictMode>
)