import React from 'react';
// import CardList from './CardList'

const Card = (props) => (
  <div className={`card ` + props.status} >
    {props._key}
    {props.title}
    {props.status}
    {props.priority}    
  </div>

)

export default Card;