import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
  console.log('props: ', props);
  return(
    <div>
      {props.cards.map((card) =>{
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

export default CardList;