import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GApp from 'grommet/components/App';
import GBox from 'grommet/components/Box';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Analytics from './Analytics';
import Transactions from './Transactions';
import Customers from './Customers';
import Tools from './Tools';
import Settings from './Settings';

const App = () => (
  <GApp>
    <GBox direction="column" pad="none">
      <GBox pad="small">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/customers" component={Customers} />
          <Route path="/tools" component={Tools} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </GBox>
      <Footer />
    </GBox>
  </GApp>
);

export default App;
