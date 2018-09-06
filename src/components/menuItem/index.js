import React from 'react';

export default (props) => {
	return (
		<li>
			<img src={props.icon} alt={''} />
			<div>{props.text}</div>
		</li>
	)
}