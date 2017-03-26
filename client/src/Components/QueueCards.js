import React from 'react';
import Card from './Card.js';

class QueueList extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div>
        {this.props.cards.filter((card) =>card.status == 'queue').map((card) =>{
          return(<Card 
            _key={card.id}
            title={card.title}
            status={card.status}
            priority={card.priority}
          />)
        })}
      </div>
    )
  }
}

export default QueueList;