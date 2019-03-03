import './config/reactotron';

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import Player from './components/Player';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Player />
    </Fragment>
  </Provider>
);

export default App;
