/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedApp from './components/app';
import store from './store/store';

// ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));

const ReservationsModule = () => (
  <Provider store={store}><ConnectedApp /></Provider>
);

export default { ReservationsModule, React, ReactDOM };
