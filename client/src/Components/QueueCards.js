import React from 'react';
import Card from './Card.js';

export default class CardList extends React.Component {
  constructor(props){
    super(props)

     this.state = {
      queue: [],
      current: [],
      completed: []
    };

  }

  render() {
    return(
      <div>
        {this.props.completed.map((card) =>{
          // const {id, priority, status, title} = card;
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