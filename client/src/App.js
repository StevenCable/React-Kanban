import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Container/Board'
import { addCard } from './actions';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Board />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    cards: state.cards
  })
};

const mapDispatchToProps = (dispatch) => {
  return({
    onAddCard: (_key, title, status, priority) => {
      dispatch(addCard(_key, title, status, priority));
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
