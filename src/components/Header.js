import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GHeader from 'grommet/components/Header';
import GTitle from 'grommet/components/Title';
import GBox from 'grommet/components/Box';
import GAnchor from 'grommet/components/Anchor';
import GImage from 'grommet/components/Image';
import GMenu from 'grommet/components/Menu';

import logo from '../../assets/images/logo.png';

const Header = () => (
  <GHeader size="large">
    <GTitle>
      <GImage src={logo} style={{ width: '80px' }} />
    </GTitle>
    <GBox alignSelf="center">
      PRELIVE
    </GBox>
    <GBox alignSelf="center" direction="row" flex={true} justify="end">
      <GMenu responsive={true} inline={true} direction="row" size="large">
        <GAnchor label="Home" path="/" />
        <GAnchor label="Analytics" path="/analytics" />
      </GMenu>
    </GBox>
  </GHeader>
);

export default Header;
