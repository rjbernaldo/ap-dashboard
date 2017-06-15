import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';
import routes from './routes';

const renderApp = (appRoutes) => {
  render(
    <AppContainer>
      <Root routes={appRoutes} />
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp(routes);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const newRoutes = require('./routes').default;
    render(newRoutes);
  });
}
