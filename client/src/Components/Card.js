import React from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../actions';
// import CardList from './CardList'

class Card extends React.Component{
  constructor(props){
    super(props)

    this.handleStatus=this.handleStatus.bind(this)
    this.handlePriority=this.handlePriority.bind(this)

    // this.props = props;
    
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
          Status: <select onChange={ this.handleStatus } value={this.props.status}>
            <option value="queue">Queue</option>
            <option value="current">Current</option>
            <option value="completed">Completed</option>
          </select>
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