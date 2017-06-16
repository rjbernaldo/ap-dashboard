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
import GFormField from 'grommet/components/FormField';
import GTextInput from 'grommet/components/TextInput';
import GSearchInput from 'grommet/components/SearchInput';
import GSelect from 'grommet/components/Select';
import GButton from 'grommet/components/Button';

const Transactions = () => (
  <GSplit flex="left">
    <GBox>
      <GBox direction="row" margin="small" colorIndex="light-2">
        <GTiles flush={true} fill={true}>
          <GTile>
            <GCard size="small">
              <GHeading align="center" tag="h4" strong={true}>Flagged Transactions</GHeading>
              <GParagraph size="small" margin="none" align="center">View transactions</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Number of transactions</GParagraph>
              <GParagraph margin="small" align="center">14</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Transaction volume</GParagraph>
              <GParagraph margin="small" align="center">$14,245.00</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Total transaction fees</GParagraph>
              <GParagraph margin="small" align="center">$245.00</GParagraph>
            </GCard>
          </GTile>
        </GTiles>
      </GBox>
      <GBox direction="row" margin="small" colorIndex="light-2">
        <GTiles flush={true} fill={true}>
          <GTile>
            <GCard size="small">
              <GHeading align="center" tag="h4" strong={true}>Today's Transactions</GHeading>
              <GParagraph size="small" margin="none" align="center">View transactions</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Number of transactions</GParagraph>
              <GParagraph margin="small" align="center">345</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Transaction volume</GParagraph>
              <GParagraph margin="small" align="center">$8,123,245.00</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Total transaction fees</GParagraph>
              <GParagraph margin="small" align="center">$6745.00</GParagraph>
            </GCard>
          </GTile>
        </GTiles>
      </GBox>
      <GBox direction="row" margin="small" colorIndex="light-2">
        <GTiles flush={true} fill={true}>
          <GTile>
            <GCard size="small">
              <GHeading align="center" tag="h4" strong={true}>This week's Transactions</GHeading>
              <GParagraph size="small" margin="none" align="center">View transactions</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Number of transactions</GParagraph>
              <GParagraph margin="small" align="center">345</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Transaction volume</GParagraph>
              <GParagraph margin="small" align="center">$8,123,245.00</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Total transaction fees</GParagraph>
              <GParagraph margin="small" align="center">$6745.00</GParagraph>
            </GCard>
          </GTile>
        </GTiles>
      </GBox>
      <GBox direction="row" margin="small" colorIndex="light-2">
        <GTiles flush={true} fill={true}>
          <GTile>
            <GCard size="small">
              <GHeading align="center" tag="h4" strong={true}>This month's Transactions</GHeading>
              <GParagraph size="small" margin="none" align="center">View transactions</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Number of transactions</GParagraph>
              <GParagraph margin="small" align="center">345</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Transaction volume</GParagraph>
              <GParagraph margin="small" align="center">$8,123,245.00</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Total transaction fees</GParagraph>
              <GParagraph margin="small" align="center">$6745.00</GParagraph>
            </GCard>
          </GTile>
        </GTiles>
      </GBox>
      <GBox direction="row" margin="small" colorIndex="light-2">
        <GTiles flush={true} fill={true}>
          <GTile>
            <GCard size="small">
              <GHeading align="center" tag="h4" strong={true}>All Transactions</GHeading>
              <GParagraph size="small" margin="none" align="center">View transactions</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Number of transactions</GParagraph>
              <GParagraph margin="small" align="center">33,345</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Transaction volume</GParagraph>
              <GParagraph margin="small" align="center">$128,123,245.00</GParagraph>
            </GCard>
          </GTile>
          <GTile>
            <GCard size="small">
              <GParagraph margin="none" align="center">Total transaction fees</GParagraph>
              <GParagraph margin="small" align="center">$2,676,455.00</GParagraph>
            </GCard>
          </GTile>
        </GTiles>
      </GBox>
    </GBox>
    <GBox>
      <GBox pad="small" margin="small" size="small" colorIndex="light-2" direction="column">
        <GHeading tag="h3" strong={true}>Transactions search</GHeading>
        <GBox>
          <GFormField>
            <GTextInput placeHolder="Eg. Item 123" />
          </GFormField>
          <br />
          <GFormField>
            <GSelect value="Any type" options={[
              'Any type',
              'User to ServiceSeeking',
              'ServiceSeeking to User',
              'User to User',
            ]} />
          </GFormField>
          <br />
          <GFormField>
            <GSelect value="Any status" options={[
              'Any status',
              'Completed',
              'Pending',
              'Failed',
              'Flagged',
            ]} />
          </GFormField>
          <br />
          <GFormField>
            <GSelect value="Any time" options={[
              'Any time',
              'Today',
              'Yesterday',
              'Previous 7 days',
            ]} />
          </GFormField>
          <br />
          <GFormField>
            <GTextInput placeHolder="$" />
          </GFormField>
          <br />
          <GButton primary={true} label="Search" href="#" />
          <GParagraph size="small"><GAnchor label="Show advanced search" /></GParagraph>
        </GBox>
      </GBox>
      <GBox align="center">
        <GAnchor label="New Transaction" />
      </GBox>
    </GBox>
  </GSplit>
);

export default Transactions;
