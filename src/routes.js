import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Analytics from './components/Analytics';

const routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/analytics" component={Analytics} />
  </Switch>
);

export default routes;
