import React, { Component } from 'react';
import addCardReq from '../helpers/addCardReq.js';
import { connect } from 'react-redux';
import { addCard } from '../actions/index.js';

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
    // console.log('gimme card: ', card)
    addCardReq(card)
      .then(card => {
        console.log('cardeezy: ', card);
        this.props.onAddCard(card.id, card.title, card.status, card.priority, card.assignTo);
      })

  }

  handleSubmit(event){
    event.preventDefault();

    this.addCard({
      title: this.state.title,
      status: this.state.status,
      priority: this.state.priority,
      assignTo: this.state.assignTo
    })

  }

  handleTitle(event){
    this.setState({
      title: event.target
      .value
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

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" value={this.state.value} onChange={this.handleTitle} />
        <input type="text" placeholder="How Important?" value={this.state.value} onChange={this.handlePriority} />
        <input type="text" placeholder="Status?" value={this.state.value} onChange={this.handleStatus} />
        <input type="text" placeholder="Who gets stuck with this?" value={this.state.value} onChange={this.handleAssignTo} />
        <input type="submit" value="Create" />
      </form>
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