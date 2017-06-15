import React, { Component } from 'react';

import GFooter from 'grommet/components/Footer';
import GMenu from 'grommet/components/Menu';
import GAnchor from 'grommet/components/Anchor';
import GParagraph from 'grommet/components/Paragraph';
import GBox from 'grommet/components/Box';

const Footer = () => (
  <GFooter size="large">
    <GBox justify="center" align="center" responsive={true} flex="grow">
      <GMenu inline={true} direction="row" size="small">
        <GAnchor label="Documentation" />
        <GAnchor label="API Reference" />
        <GAnchor label="Send a support ticket" />
        <GAnchor label="Change log" />
        <GAnchor label="Status - Operational" />
      </GMenu>
      <GBox pad="medium">
        <GParagraph margin="none">
          © Assembly 2017 - Release xxx.xxx
        </GParagraph>
      </GBox>
    </GBox>
  </GFooter>
);

export default Footer;
