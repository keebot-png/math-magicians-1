import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav>
    <div className="headline">
      Math Magicians
    </div>
    <ul className="navList">
      <li className="navList-item">
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        &#124;
      </li>
      <li className="navList-item">
        <Link to="/calculator">
          Calculator
        </Link>
      </li>
      <li>
        &#124;
      </li>
      <li className="navList-item">
        <Link to="/quote">
          Quote
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
