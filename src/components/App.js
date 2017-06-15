import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GApp from 'grommet/components/App';
import GBox from 'grommet/components/Box';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Analytics from './Analytics';

const App = () => (
  <GApp>
    <GBox direction="column" pad="medium" size="full">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/analytics" component={Analytics} />
      </Switch>
      <Footer />
    </GBox>
  </GApp>
);

export default App;
