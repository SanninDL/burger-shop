import styles from './SelectItem.module.scss'
import React from 'react'

export default function SelectItem({ option, handleSelect, value, selected }) {
	const onSelect = () => {
		if (handleSelect) {
			handleSelect(option)
		}
	}

	return (
		<div
			className={
				option.value === value || option._id === value
					? `${styles.wrap} ${styles.active}`
					: styles.wrap
			}
			onClick={onSelect}>
			<div className={styles.labelImg}>
				{option.image !== '' && (
					<img src={option.image} alt={option.name} />
				)}
			</div>
			<div className={styles.desk}>
				<span className={styles.name}>{option.name}</span>
				{option.description && (
					<span>({option.description || ''})</span>
				)}
			</div>
			{selected ? (
				<div className={styles.arrow}>
					<i className='fas fa-chevron-down'></i>
				</div>
			) : (
				<>
					{(option.value === value || option._id === value) && (
						<div className={styles.selected}>
							<i className='fas fa-check-circle'></i>
						</div>
					)}
				</>
			)}
		</div>
	)
}
