import React from 'react';
// import CardList from './CardList'

const Card = (props) => (
  <div className={`card ` + props.status} >
    <p>{props._key}</p>
    <p>{props.title}</p>
    <p>{props.status}</p>
    <p>{props.priority}</p>
  </div>

)

export default Card;