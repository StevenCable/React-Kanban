import React from 'react';

const Card = (props) => (
  <div className= {`card ` + props.status} >
    {props.key}
    {props.title}
    {props.status}
    {props.priority}    
  </div>

)