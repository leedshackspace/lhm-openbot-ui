import React from 'react';
import './scss/OpenBot.scss';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App';
import Websocket from './components/functional/Websocket';

const OpenBot = () => (
  <Provider store={configureStore()}>
    <Websocket>
      <App />
    </Websocket>
  </Provider>
);

export default OpenBot;
