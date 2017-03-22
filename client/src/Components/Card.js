import React from 'react';

const Card = (props) => (
  <div className= {`card ` + props.status} >
    {props._key}
    {props.title}
    {props.status}
    {props.priority}    
  </div>

)

export default Card;