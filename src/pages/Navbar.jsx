import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/service">Nos Service</Link>
        </li>
        <li>
          <Link to="/contact">Contactez-nous</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;