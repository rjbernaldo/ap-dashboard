import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = ({ routes }) => (
  <div>
    <Header />
    {routes()}
    <Footer />
  </div>
);

export default App;
