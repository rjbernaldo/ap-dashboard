import React, { Component } from 'react';

import GHeader from 'grommet/components/Header';
import GTitle from 'grommet/components/Title';
import GBox from 'grommet/components/Box';
import GAnchor from 'grommet/components/Anchor';
import GImage from 'grommet/components/Image';
import GMenu from 'grommet/components/Menu';

import SearchIcon from 'grommet/components/icons/base/Search';
import UserIcon from 'grommet/components/icons/base/User';

import logo from '../../assets/images/logo.png';

const Header = () => (
  <GHeader size="large">
    <GTitle>
      <GAnchor path="/">
        <GImage src={logo} style={{ width: '80px' }} />
      </GAnchor>
    </GTitle>
    <GBox alignSelf="center">
      PRELIVE
    </GBox>
    <GBox alignSelf="center" direction="row" flex={true} justify="end">
      <GMenu responsive={true} inline={true} direction="row" size="large">
        <GAnchor label="Analytics" path="/analytics" />
        <GAnchor label="Transactions" path="/transactions" />
        <GAnchor label="Customers" path="/customers" />
        <GAnchor label="Tools" path="/tools" />
        <GAnchor label="Settings" path="/settings" />
        <GBox alignSelf="center"><SearchIcon /></GBox>
        <GBox alignSelf="center"><UserIcon /></GBox>
      </GMenu>
    </GBox>
  </GHeader>
);

export default Header;
