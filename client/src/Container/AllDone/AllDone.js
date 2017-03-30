import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addCard, updateCard } from './actions';
import { connect } from 'react-redux';
import QueueList from './Components/QueueCards.js';
import CurrentList from './Components/CurrentCards.js';
import CompletedList from './Components/CompletedCards.js';
import getCardsReq from './helpers/getCardsReq';
import updateCardReq from './helpers/updateCardReq';
import deleteCardReq from './helpers/deleteCardReq'
import NewCardForm from './Components/NewCardForm.js';



class AllDone extends Component {
  constructor(){
    super();

    this.editStatus = this.editStatus.bind(this);
    this.editPriority = this.editPriority.bind(this);
    // this.deleteCard = this.deleteCard.bind(this);
  }


componentWillMount(){
  getCardsReq()
    .then( data => {
      if(data.length === 0){
        alert('You have no tasks. Get to work Muh Fucka');
      }

      data.forEach(card => {
        this.props.onAddCard(card.id, card.title, card.status, card.priority, card.assignTo );
      });
    });   
}

editStatus(cards){
  updateCardReq(cards)
    .then((card) =>{      
      this.props.onUpdateCard(card.id, card.title, card.status, card.priority, card.assignTo);
    });
}

editPriority(cards){
  updateCardReq(cards)
    .then((card) =>{
      this.props.onUpdateCard(card.id,card.title, card.status, card.priority, card.assignTo);
    });
}

// deleteCard(){
//   deleteCardReq()

// }


  render(){
    return (
      <div className="AllDone">
        <div className="AllDone-header">
          <img src={logo} className="AllDone-logo" alt="logo" />
          <h2>Welcome to ALLDONE! - Steven</h2>
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
    onUpdateCard: (_key, title, status, priority, assignTo) => {
      dispatch(updateCard(_key, title, status, priority, assignTo));
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllDone);
