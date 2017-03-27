import React from 'react';
import Card from './Card.js';

class CurrentList extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="current">
        {this.props.cards.filter( ( card ) =>card.status === 'current').map( ( card ) =>{
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

export default CurrentList;