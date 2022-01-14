import styles from './ToTopBtn.module.scss'

function ToTopBtn({ showToTopBtn }) {
	const onScrollToTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<>
			{showToTopBtn && (
				<button className={styles.Btn} onClick={onScrollToTop}>
					<i className='fas fa-chevron-up'></i>
				</button>
			)}
		</>
	)
}

export default ToTopBtn
