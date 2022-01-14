import React from 'react'
import styles from './ProcessBar.module.scss'

export default function ProcessBar({ activeItem }) {
	return (
		<div className={styles.processBar}>
			<div
				className={
					activeItem === 1
						? styles.processItemActive
						: styles.processItem
				}
			>
				View Cart
			</div>
			<div
				className={
					activeItem === 2
						? styles.processItemActive
						: styles.processItem
				}
			>
				Checkout
			</div>
			<div
				className={
					activeItem === 3
						? styles.processItemActive
						: styles.processItem
				}
			>
				Done
			</div>
		</div>
	)
}
