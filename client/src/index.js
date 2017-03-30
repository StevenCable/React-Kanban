import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cards from './reducers';
import Nav from './Components/Nav.js'
import About from './Components/About.js'

let store = createStore(cards);

ReactDOM.render(
	<Provider store={ store }>
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={App}/>
      <Route path="/About" component={About}/>

    </div>
  </Router>
  </Provider>,
  document.getElementById('root')
);
