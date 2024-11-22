import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/cv">CV</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Header;
