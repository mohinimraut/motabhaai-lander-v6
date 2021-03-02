

import React from 'react'
import './App.css';
import header from './images/Group-40.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-light">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={header} id= "headerimg" class="img-fluid" alt="Responsive img" style={{width:"30%",height:"30%"}}/></NavLink>
    
      
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">

   

    

    </ul>
      
    </div>
   </div>
  </nav>
    </>
  )
}

export default Navbar;
