import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GHeader from 'grommet/components/Header';
import GTitle from 'grommet/components/Title';
import GBox from 'grommet/components/Box';

const Header = () => (
  <GHeader>
    <GTitle>Header</GTitle>
    <GBox>
      <Link to="/">Home</Link>
      <Link to="/analytics">Analytics</Link>
    </GBox>
  </GHeader>
);

export default Header;
