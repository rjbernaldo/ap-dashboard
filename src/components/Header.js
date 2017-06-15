import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GHeader from 'grommet/components/Header';
import GTitle from 'grommet/components/Title';
import GBox from 'grommet/components/Box';
import GAnchor from 'grommet/components/Anchor';
import GImage from 'grommet/components/Image';

import logo from '../../assets/images/logo.png';

const Header = () => (
  <GBox>
    <GHeader>
      <GTitle>
        <GImage src={logo} style={{ width: '100px' }} />
      </GTitle>
      <GBox>
        <GAnchor label="Home" path="/" />
      </GBox>
      <GBox>
        <GAnchor label="Analytics" path="/analytics" />
      </GBox>
    </GHeader>
  </GBox>
);

export default Header;
