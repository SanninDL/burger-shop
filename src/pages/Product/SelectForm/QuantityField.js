import React from 'react'
import SelectNumber from '../../../component/SelectNumber/SelectNumber'

import styles from './QuantityField.module.scss'

export default function QuantityField(props) {
	const { label, form, handleChange, price, quantity } = props
	const setQuantity = (quantity) => {
		handleChange('quantity', quantity)
		form.setFieldValue('quantity', quantity)
	}
	return (
		<div className={styles.formItem}>
			{label && <h4 className={styles.label}>{label}</h4>}
			<div className={styles.content}>
				<span>${price}</span>
				<SelectNumber quantity={quantity} setQuantity={setQuantity} />
			</div>
		</div>
	)
}
