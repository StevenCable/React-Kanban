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

  render(){
    return (
      <div className={`${this.props.priority}`} >
        <p>Task No.: {this.props._key}</p>
        <p>Title: {this.props.title}</p>
        <form className="editCard" >
        <p><input type="radio" name="status" value="queue" onChange={this.handleStatus} defaultChecked={this.props.status==='queue'} /><span>Queue</span></p>
        <p><input type="radio" name="status" value="current" onChange={this.handleStatus} defaultChecked={this.props.status==='current'} /><span>Current</span></p>
        <p><input type="radio" name="status" value="completed" onChange={this.handleStatus} defaultChecked={this.props.status==='completed'} /><span>Completed</span></p>
          
          <p>Priority: <select onChange={ this.handlePriority } value={this.props.priority}>
              <option value="mellow">Mellow</option>
              <option value="whatevs">Whatevs</option>
              <option value="urgent">Urgent</option>
              <option value="block">Fuuck</option>
            </select></p>
        </form>
          <p>Responsible: {this.props.assignTo}</p>
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