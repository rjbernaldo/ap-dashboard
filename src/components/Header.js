import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <div>Header</div>
    <Link to='/'>Home</Link>
    <Link to='/analytics'>Analytics</Link>
  </div>
);

export default Header;
