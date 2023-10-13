import React from 'react'
import '../Styles/Navbar.css'
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
        <h1>
          <Link to="/"> Quiz Registration </Link>
        </h1>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/partners">Our Partners</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;