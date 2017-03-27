import React from 'react';
// import CardList from './CardList'

const Card = (props) => (
  <div className={`${props.priority}`} >
    <p>Task No.: {props._key}</p>
    <p>Title: {props.title}</p>
    <p>Status: {props.status}</p>
    <p>Priority: {props.priority}</p>
    <p>Responsible: { props.assignTo }</p>
  </div>

)

export default Card;