import React, { Component } from 'react';

import GTabs from 'grommet/components/Tabs';
import GTab from 'grommet/components/Tab';
import GBox from 'grommet/components/Box';
import GSplit from 'grommet/components/Split';
import GParagraph from 'grommet/components/Paragraph';
import GCard from 'grommet/components/Card';
import GAnchor from 'grommet/components/Anchor';
import GTiles from 'grommet/components/Tiles';
import GTile from 'grommet/components/Tile';
import GHeading from 'grommet/components/Heading';

const Analytics = () => (
  <GTabs justify="start">
    <GTab title="Overview">
      <GSplit flex="left">
        <GBox pad="small">
          <h3 style={{'marginBottom': '0px'}}>Looker</h3>
          <GParagraph>
            Looker visualizations
          </GParagraph>
        </GBox>
        <GBox pad="small" size="small">
          About this page
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui dolor,
            bibendum vitae enim quis, lobortis consectetur erat.
            Aenean sed ultricies lacus, vel pellentesque felis.
          </p>
        </GBox>
      </GSplit>
    </GTab>
    <GTab title="Business details">
      <GSplit flex="left">
        <GBox pad="small">
          <h3 style={{'marginBottom': '0px'}}>Transactions</h3>
          <GTiles flush={false}>
            <GTile>
              <GBox colorIndex="light-2">
                <GCard 
                  heading={
                    <GBox separator="bottom">
                      <GHeading align="center" tag="h3" strong={true}>525,600</GHeading>
                      <GHeading align="center" tag="h4" strong={true}>All Transactions</GHeading>
                    </GBox>
                  }
                  description={
                    <GParagraph align="center" size="small">
                      Information regarding each transaction within your platform.
                      This includes buyer, seller, transaction value, and fee information.
                    </GParagraph>
                  }
                />
              </GBox>
            </GTile>
            <GTile>
              <GBox colorIndex="light-2">
                <GCard 
                  heading={
                    <GBox separator="bottom">
                      <GHeading align="center" tag="h3" strong={true}>$3,500.00</GHeading>
                      <GHeading align="center" tag="h4" strong={true}>Monthly transaction count</GHeading>
                    </GBox>
                  }
                  description={
                    <GParagraph align="center" size="small">
                      Amount of all transaction fees charged to your Platform,
                      by Assembly Payments, grouped by month.
                    </GParagraph>
                  }
                />
              </GBox>
            </GTile>
            <GTile>
              <GBox colorIndex="light-2">
                <GCard 
                  heading={
                    <GBox separator="bottom">
                      <GHeading align="center" tag="h3" strong={true}>$1,701.00</GHeading>
                      <GHeading align="center" tag="h4" strong={true}>Monthly platform volume</GHeading>
                    </GBox>
                  }
                  description={
                    <GParagraph align="center" size="small">
                      All funds refunded by your platform, to your users, grouped by month.
                      This includes buyer, seller, transaction value and item information.
                    </GParagraph>
                  }
                />
              </GBox>
            </GTile>
          </GTiles>
          <h3 style={{'marginBottom': '0px'}}>Fees</h3>
          <GParagraph>
            Fees here
          </GParagraph>
          <h3 style={{'marginBottom': '0px'}}>Users</h3>
          <GParagraph>
            Users here
          </GParagraph>
        </GBox>
        <GBox pad="small" size="small">
          About this page
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui dolor,
            bibendum vitae enim quis, lobortis consectetur erat.
            Aenean sed ultricies lacus, vel pellentesque felis.
          </p>
        </GBox>
      </GSplit>
    </GTab>
  </GTabs>
);

export default Analytics;
