import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Container/Board'
import { addCard } from './actions';
import { connect } from 'react-redux';
import QueueList from './Components/QueueCards.js';


class App extends Component {
  constructor(){
    super()

    
  }
getQueue = () => {
    let oReq = new XMLHttpRequest();

    oReq.addEventListener('load', (event) => {
      let data = JSON.parse(oReq.response)
      let results = data.forEach(card => {
        this.props.onAddCard(card.id, card.title, card.status, card.priority )
      }) 
      
    });
    oReq.open('GET', '/api/kanban/queue');
    oReq.send();
  }
getCurrent = () => {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (event) => {
      let data = JSON.parse(oReq.response)
      let results = data.forEach(card => {
        this.props.onAddCard(card.id, card.title, card.status, card.priority )
      }) 
      
    });
    oReq.open('GET', '/api/kanban/current');
    oReq.send();
  }
getComplete = () => {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', (event) => {
     let data = JSON.parse(oReq.response)
      let results = data.forEach(card => {
        this.props.onAddCard(card.id, card.title, card.status, card.priority )
      }) 
      
    });
    oReq.open('GET', '/api/kanban/completed');
    oReq.send();
  }

componentWillMount() {
  this.getQueue()
  this.getCurrent()
  this.getComplete()   
}

  render(){
    console.log("this.props: ", this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <QueueList cards={this.props.cards}
        />
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
