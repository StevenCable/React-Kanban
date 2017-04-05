import React, { Component } from 'react';
import addCardReq from '../helpers/addCardReq.js';
import { connect } from 'react-redux';
import { addCard } from '../actions/index.js';
import Select from 'react-select';
import 'react-select/dist/react-select.css'

class NewCardForm extends Component {
  constructor ( props ) {
    super( props );

    this.handleTitle = this.handleTitle.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.handleAssignTo = this.handleAssignTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: "",
      status: "",
      priority: "",
      assignTo: ""
    };

  }

  addCard(card){
    addCardReq(card)
      .then(card => {
        this.props.onAddCard(card.id, card.title, card.status, card.priority, card.assignTo);
      })

  }

  handleSubmit(event){
    event.preventDefault();

    this.addCard({      
      _key: this.state._key,
      title: this.state.title,
      status: this.state.status,
      priority: this.state.priority,
      assignTo: this.state.assignTo
    })

  }

  handleTitle(event){
    this.setState({
      title: event.target.value
    });
  }

  handleStatus(event){
    this.setState({
      status: event.target.value
    });
  }

  handlePriority(event){
    this.setState({
      priority: event.target.value
    });
  }

  handleAssignTo(event){
    this.setState({
      assignTo: event.target.value
    });
  }
//value={this.state.value} 
  

  render(){
    return(
      <div className="newForm">
        <form onSubmit={this.handleSubmit}>
          New Card(s): <input className= "input" type="text" placeholder="Title" value={this.state.value} onChange={this.handleTitle} />
          <select className= "dropDown" name="priority" placeholder="How Important?" onChange={this.handlePriority}>
            <option disabled selected value>Priority</option>
            <option value="mellow">Mellow</option>
            <option value="whatevs">Whatevs</option>
            <option value="urgent">Urgent</option>
            <option value="fuuuck">Fuuuck</option>
          </select>
          <input className= "input" type="text" placeholder="Who gets stuck with this?" value={this.state.value} onChange={this.handleAssignTo} />
          <select className="dropDown" name="status" onChange={this.handleStatus}>
            <option disabled selected value>Status</option>
            <option value="queue">Queue</option>
            <option value="current">Current</option>
            <option value="completed">Completed</option>
          </select>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
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
)(NewCardForm);