import React, { useCallback, useMemo, useState } from 'react'
import styles from './PaginationProduct.module.scss'

export default function PaginationProduct(props) {
	const { totalCount, currentPage, pageSize, handleChangPage } = props
	const [firstNumber, setFirstNumber] = useState(1)
	const onClickNumber = useCallback(
		(params) => {
			handleChangPage(params)
		},
		[handleChangPage]
	)
	const listNumberEle = useMemo(() => {
		// const first = Math.ceil(currentPage / pageSize)
		// console.log("🚀 ~ first", first)

		const eleArray = []
		for (var i = 0; i < pageSize; i++) {
			const number = firstNumber + i
			if (number <= totalCount) {
				const ele = (
					<button
						onClick={() => onClickNumber(number)}
						className={
							number === currentPage
								? `${styles.current} ${styles.number}`
								: styles.number
						}>
						{number}
					</button>
				)
				eleArray.push(ele)
			}
		}
		return eleArray
	}, [pageSize, currentPage, firstNumber, totalCount, onClickNumber])

	const onPrev = () => {
		handleChangPage(currentPage - 1)
		if (currentPage % pageSize === 1) {
			setFirstNumber(currentPage - pageSize)
		}
	}
	const onNext = () => {
		handleChangPage(currentPage + 1)
		if (currentPage % pageSize === 0) {
			setFirstNumber(currentPage + 1)
		}
	}

	return (
		<>
			<ul className={styles.pages}>
				{currentPage > 1 && (
					<li>
						<button className={styles.prev} onClick={onPrev}>
							<i className='fas fa-long-arrow-alt-left'></i>
						</button>
					</li>
				)}
				{listNumberEle.map((ele, index) => (
					<li key={index}>{ele}</li>
				))}

				{currentPage < totalCount && (
					<li>
						<button className={styles.next} onClick={onNext}>
							<i className='fas fa-long-arrow-alt-right'></i>
						</button>
					</li>
				)}
			</ul>
		</>
	)
}
