import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const Root = ({ routes }) => (
  <BrowserRouter>
    <App routes={routes} />
  </BrowserRouter>
);

export default Root;
