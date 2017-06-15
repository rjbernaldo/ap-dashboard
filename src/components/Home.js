import React, { Component } from 'react';

import GHero from 'grommet/components/Hero';
import GTabs from 'grommet/components/Tabs';
import GTab from 'grommet/components/Tab';
import GBox from 'grommet/components/Box';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';
import GAccordion from 'grommet/components/Accordion';
import GAccordionPanel from 'grommet/components/AccordionPanel';

const Home = () => (
  <div>
    <h2>Welcome to Assembly</h2>
    <GParagraph>
      Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
      Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
    </GParagraph>
    <GTabs>
      <GTab title="Integration Roadmap">
        <h3 style={{'marginBottom': '0px'}}>Admin</h3>
        <GBox pad="small">
          <GAccordion openMulti={true}>
            <GAccordionPanel heading="Integration task title">
              <GBox pad="small">
                <GParagraph>
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
        <h3>Migrate to live</h3>
        <GParagraph>
          Once all integration tasks have been successfully completed the button below will be enabled in order to migrate this pre-live environment to a live production environment.
        </GParagraph>
        <GButton label="Launch" primary={true} />
      </GTab>
      <GTab title="Business details">
        <GParagraph>
          Second content
        </GParagraph>
      </GTab>
    </GTabs>
  </div>
);

export default Home;
