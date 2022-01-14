import React, { useEffect, useState } from 'react'
import styles from './SelectNumber.module.scss'

export default function SelectNumber({ quantity, setQuantity }) {
	const [inputValue, setInputValue] = useState(1)

	useEffect(() => {
		setInputValue(quantity)
	}, [quantity])

	const onChangeInput = (e) => {
		setInputValue(Number(e.target.value))
		if (setQuantity) {
			setQuantity(Number(e.target.value))
		}
	}
	const onChangeCount = (i) => {
		if (i === -1 && inputValue === 1) {
		} else {
			setInputValue((quantity) => quantity + i)
			if (setQuantity) {
				setQuantity(inputValue + i)
			}
		}
	}
	const disableStyle = {
		color: '#d4c7b7',
		cursor: 'not-allowed',
	}

	return (
		<div className={styles.count}>
			<button
				className={styles.down}
				style={inputValue === 1 ? disableStyle : {}}
				onClick={() => onChangeCount(-1)}
				type='button'>
				<i className='fas fa-minus-circle'></i>
			</button>
			<input
				className={styles.inputControl}
				type='text'
				inputMode='numeric'
				value={inputValue}
				onChange={onChangeInput}
			/>
			<button
				className={styles.up}
				onClick={() => onChangeCount(1)}
				type='button'>
				<i className='fas fa-plus-circle'></i>
			</button>
		</div>
	)
}
