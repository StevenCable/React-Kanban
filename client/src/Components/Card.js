import React from 'react';

const Card = (props) => (
  <div className= {`card ` + props.status} >
  	<ul>
  		<li>
		    <p>{props._key}</p>
		    <p>{props.title}</p>
		    <p>{props.status}</p>
		    <p>{props.priority}</p>
		</li>
	</ul>  
  </div>

)

export default Card;