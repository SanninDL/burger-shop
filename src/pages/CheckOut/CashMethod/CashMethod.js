import React from 'react'
import styles from './CashMethod.module.scss'
export default function CashMethod(props) {
	const { field, type, label, desc } = props
	const { checked, name } = field

	return (
		<div>
			<div className={styles.checkItem}>
				<input type={type} {...field} id={name} />
				<label htmlFor=''>{label}</label>
				<p className={`${checked && styles.showDesc} ${styles.desc}`}>
					{desc}
				</p>
			</div>
		</div>
	)
}
