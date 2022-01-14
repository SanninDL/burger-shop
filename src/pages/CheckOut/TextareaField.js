import React from 'react'

function TextareaField(props) {
	const { field, type, label, placeholder } = props
	const { name } = field
	return (
		<>
			{label && <label htmlFor={name}>{label}</label>}
			<textarea
				rows='4'
				cols='5'
				id={name}
				type={type}
				placeholder={placeholder}
				{...field}
			/>
		</>
	)
}

export default TextareaField
