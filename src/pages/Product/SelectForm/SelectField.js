//
import React from 'react'
import styles from './SelectField.module.scss'
import SelectItem from './SelectItem'

export default function SelectField(props) {
	// const [openSelect, setOpenSelect] = useState(false)
	const { field, label, form, handleChange, options } = props
	const { value, name } = field

	const handleSelect = (option) => {
		form.setFieldValue(name, option.value || option._id)
		if (handleChange) {
			handleChange(name, option)
		}
	}
	const optionSelected = options.find(
		(option) => option.value === value || option._id === value
	)

	return (
		<div className={styles.formGroup}>
			{label && <h4 className={styles.label}>{label}</h4>}
			{optionSelected && (
				<div className={styles.formItem}>
					<div className={styles.selected}>
						<SelectItem
							option={optionSelected}
							value={value}
							selected={true}
						/>
					</div>
					<div className={styles.group}>
						{options.map((option, index) => (
							<SelectItem
								option={option}
								key={index}
								handleSelect={handleSelect}
								value={value}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
