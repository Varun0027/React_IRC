import React from 'react';
import { Link } from 'react-router-dom';

import '../../Assets/Css/header.css' 


const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/home">
          Home
        </Link>
        <Link to="/login">
          Login
        </Link>
        <Link to="/sign">
          SignUp
        </Link>
        <Link to="/profile">
        Profile
        </Link>
        <Link to="/logout">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
