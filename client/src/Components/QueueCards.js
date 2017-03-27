import React from 'react';
import Card from './Card.js';

class QueueList extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div className="queue">
        {this.props.cards.filter( ( card ) => card.status ==='queue').map( ( card ) => {
          return(<Card 
            _key={ card._key }
            title={ card.title }
            status={ card.status }
            priority={ card.priority }
            assignTo={ card.assignTo }
          />)
        })}
      </div>
    )
  }
}

export default QueueList;