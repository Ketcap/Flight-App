import React from 'react';
import classes from './index.module.scss'
export default (props) => {
	return (
		<div className={props.wrapperClass}>
			<button onClick={props.onClick}
				value={props.text}
				className={[classes.button, classes[props.type]].join(' ')}
			>
				{props.children}
			</button>
		</div>
	)
}
