import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Board from './Container/Board'
import { addCard, updateCard } from './actions';
import { connect } from 'react-redux';
import QueueList from './Components/QueueCards.js';
import CurrentList from './Components/CurrentCards.js';
import CompletedList from './Components/CompletedCards.js';
import getCardsReq from './helpers/getCardsReq';
import updateCardReq from './helpers/updateCardReq';
import NewCardForm from './Components/NewCardForm.js';



class App extends Component {
  constructor(){
    super()

    this.editStatus = this.editStatus.bind(this)
    this.editPriority = this.editPriority.bind(this)
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

editStatus(card){
  console.log("muhhh status card: ", card)
  updateCardReq(card)
    .then(() =>{
      console.log('what status are you: ', this.props.status)
      this.props.onUpdateCard(card._key,card.status)
    })
  //insert req for data
  //.then
  //run context action to edit status/priority by id
}
editPriority(card){
  console.log("muhhh priority card: ", card)
  updateCardReq(card)
    .then(() =>{
      console.log('what priority are you: ', this.props. priority)
      this.props.onUpdateCard(card._key,card.priority)
    })
  //insert req for data
  //.then
  //run context action to edit status/priority by id
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
          <QueueList cards={this.props.cards} editStatus={this.editStatus} editPriority={this.editPriority}/>
          <CurrentList cards={this.props.cards} editStatus={this.editStatus} editPriority={this.editPriority}/>
          <CompletedList cards={this.props.cards} editStatus={this.editStatus} editPriority={this.editPriority}/>
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
    },
    onUpdateCard: (_key, status, priority) => {
      dispatch(updateCard(_key, status, priority));
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
