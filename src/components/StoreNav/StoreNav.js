import react from 'react';
import logo from'../../images/logo.png'
import {
    Link
  } from "react-router-dom";
function StoreNav(props) {


    return     <nav>
    <div className="right-toolbar">
          <Link to="/"><img src={logo} alt="logo" align="center" /></Link>
          <Link to="/">Home</Link>
          <Link to="/new-in">New In</Link>
          <Link to="/furniture">Furniture</Link>
          <Link to="/ceramics">Ceramics</Link>
          <Link to="/lighting">Lighting</Link>
          <Link to="/christmas">Christmas</Link>
          <Link to="/contact">Contact</Link>
    </div>
    </nav>
}

export default StoreNav;

