import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Analytics from './Analytics';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/analytics" component={Analytics} />
    </Switch>
    <Footer />
  </div>
);

export default App;
