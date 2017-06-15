import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GApp from 'grommet/components/App';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Analytics from './Analytics';

const App = () => (
  <GApp>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/analytics" component={Analytics} />
    </Switch>
    <Footer />
  </GApp>
);

export default App;
