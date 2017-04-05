import React from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../actions';

class Card extends React.Component{
  constructor(props){
    super(props)

    this.handleStatus=this.handleStatus.bind(this)
    this.handlePriority=this.handlePriority.bind(this)
    
  }

  handleStatus(event){
     
    this.props.editStatus({
      _key: this.props._key,
      status: event.target.value,
      priority: this.props.priority
    })
  }

  handlePriority(event){
   
    this.props.editPriority({
      _key: this.props._key,
      status: this.props.status,
      priority: event.target.value
    })
  }

  deleteCard(){
    //need to finish my delete card by changing the status of said card to be 'deleted' which will
    //in turn change it's className which will remove it from filter. Then go server side and don't pass through any data with status=delete.

  }

  render(){
    return (
      <div className={`${this.props.status}-card`}>
        <div className={`${this.props.priority}`} >
          <p className="task">Task No.: {this.props._key}</p>
          <p>Title: <span>{this.props.title}</span></p>
          <form className="editCard" >
          <p>Status: <select className="dropDownCard" name="status" onChange={this.handleStatus} value={this.props.status}>
            <option value="queue">Queue</option>
            <option value="current">Current</option>
            <option value="completed">Completed</option>
            <option value="remove">Delete</option>
          </select></p>          
          <p>Priority: <select className="dropDownCard" onChange={ this.handlePriority } value={this.props.priority}>
              <option value="mellow">Mellow</option>
              <option value="whatevs">Whatevs</option>
              <option value="urgent">Urgent</option>
              <option value="block">Fuuck</option>
            </select></p>
          </form>
            <p className="responsible"><p>{this.props.assignTo}</p></p>
        </div>
      </div>
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    onUpdateCard: (_key, title, status, priority, assignTo) => {
      dispatch(updateCard(_key, title, status, priority, assignTo));
    }
  })
}
export default connect(
  mapDispatchToProps
)(Card);