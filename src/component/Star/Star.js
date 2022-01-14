import React from 'react'
import styles from './Star.module.scss'

export default function Star({ number }) {
	return (
		<div className={styles.rate}>
			<i className='fas fa-star'></i>
			<i className='fas fa-star'></i>
			<i className='fas fa-star'></i>
			<i className='fas fa-star'></i>
			<i className='fas fa-star'></i>
			<div
				className={styles.overlay}
				style={{
					width: `${Math.round(100 - number * 20)}%`,
				}}></div>
		</div>
	)
}
