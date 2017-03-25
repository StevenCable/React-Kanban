import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cards from './reducers';

let store = createStore(cards);

ReactDOM.render(
	<Provider>
  <App />
  </Provider>,
  document.getElementById('root')
);
