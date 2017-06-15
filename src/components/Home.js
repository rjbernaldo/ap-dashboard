import React, { Component } from 'react';

import GHeading from 'grommet/components/Heading';
import GTabs from 'grommet/components/Tabs';
import GTab from 'grommet/components/Tab';
import GBox from 'grommet/components/Box';
import GCheckBox from 'grommet/components/CheckBox';
import GSplit from 'grommet/components/Split';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';
import GAccordion from 'grommet/components/Accordion';
import GAccordionPanel from 'grommet/components/AccordionPanel';

const Home = () => (
  <div>
    <GHeading strong={true} tag="h2" style={{ 'paddingTop': '12px' }}>Welcome to Assembly</GHeading>
    <GParagraph>
      Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
      Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
    </GParagraph>
    <GTabs justify="start">
      <GTab title="Integration Roadmap">
        <GSplit flex="left">
          <GBox pad="small">
            <h3 style={{'marginBottom': '0px'}}>Admin</h3>
            <GBox pad="small">
              <GAccordion openMulti={true}>
                <GAccordionPanel heading={<GCheckBox label="Integration task title" />} pad="none">
                  <GBox pad="small">
                    <GParagraph size="xsmall">
                      Vivamus rutrum risus et tincidunt ullamcorper. Sed aliquet euismod sapien vitae convallis. Nulla egestas elit sapien, nec rhoncus sem cursus in. Nullam a dignissim tortor, vitae lobortis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </GParagraph>
                  </GBox>
                </GAccordionPanel>
              </GAccordion>
            </GBox>
            <h3>Planning</h3>
            <h3>Design</h3>
            <h3>Development</h3>
            <h3>Testing</h3>
            <h3 style={{'marginBottom': '0px'}}>Migrate to live</h3>
            <GParagraph>
              Once all integration tasks have been successfully completed the button below will be enabled in order to migrate this pre-live environment to a live production environment.
            </GParagraph>
            <GButton label="Launch" primary={true} />
          </GBox>
          <GBox pad="small" size="small">
            Getting started
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui dolor, bibendum vitae enim quis, lobortis consectetur erat. Aenean sed ultricies lacus, vel pellentesque felis.
            </p>
          </GBox>
        </GSplit>
      </GTab>
      <GTab title="Business details">
        <GSplit flex="left">
          <GBox pad="small">
            <GBox colorIndex="light-2" pad="medium" margin="small">
              <h3>Your account details</h3>
              <div>Marketplace: serviceseeking.com</div>
              <div>Username: admin@serviceseeking.com</div>
            </GBox>
            <GBox colorIndex="light-2" pad="medium" margin="small">
              <h3>Your API details</h3>
              <div>API key: Generate API key</div>
              <div>API endpoint: https://secure.api.promisepay.com</div>
            </GBox>
          </GBox>
          <GBox pad="small" size="small">
            Getting started
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui dolor, bibendum vitae enim quis, lobortis consectetur erat. Aenean sed ultricies lacus, vel pellentesque felis.
            </p>
          </GBox>
        </GSplit>
      </GTab>
    </GTabs>
  </div>
);

export default Home;
