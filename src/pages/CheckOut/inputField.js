import React from 'react'

function inputField(props) {
	const { field, type, label, placeholder } = props
	const { name } = field
	return (
		<>
			{label && <label htmlFor={name}>{label}</label>}
			<input id={name} type={type} placeholder={placeholder} {...field} />
		</>
	)
}

export default inputField
