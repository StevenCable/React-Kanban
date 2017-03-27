import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Board from './Container/Board'
import { addCard } from './actions';
import { connect } from 'react-redux';
import QueueList from './Components/QueueCards.js';
import CurrentList from './Components/CurrentCards.js';
import CompletedList from './Components/CompletedCards.js';
import getCardsReq from './helpers/getCardsReq';
import NewCardForm from './Components/NewCardForm.js';



class App extends Component {
  constructor(){
    super()
  }

componentWillMount() {
  getCardsReq()
    .then( data => {
      console.log("data Nao", data)
      if(data.length === 0){
        alert('You have no tasks. Get to work Muh Fucka');
      }

      data.forEach(card => {
        this.props.onAddCard(card.id, card.title, card.status, card.priority, card.assignTo );
      });
    })   
}

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Steven</h2>
        </div>
        <div id="newCardForm">
          <NewCardForm />
        </div>
        <div className="taskBoard">
          <QueueList cards={this.props.cards} />
          <CurrentList cards={this.props.cards} />
          <CompletedList cards={this.props.cards} />
        </div>
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
    onAddCard: (_key, title, status, priority, assignTo) => {
      dispatch(addCard(_key, title, status, priority, assignTo));
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
