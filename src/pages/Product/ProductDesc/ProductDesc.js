import { useState } from 'react'
import styles from './ProductDesc.module.scss'

const getDate = (timestamp) => {
	const date = new Date(timestamp)
	const a = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
	return a
}

function ProductDesc({ review }) {
	const [isDescription, setIsDescription] = useState(false)

	const showTab = (param) => {
		setIsDescription(param)
	}

	return (
		<div className={styles.ProductDescription}>
			<div className={styles.tabBar}>
				<div
					className={isDescription ? styles.tab : styles.tabActive}
					onClick={() => showTab(false)}
				>
					Reviews {review.length}
				</div>
			</div>
			<div className={styles.tabContent}>
				{review.map((item, index) => (
					<div className={styles.customerReview} key={index}>
						<div className={styles.customerReview__heading}>
							<div className={styles.avatar}>
								<img
									src='https://secure.gravatar.com/avatar/8ca3fe8440883023010924dd86cb3218?s=60&d=mm&r=g'
									alt=''
								/>
							</div>
							<div className={styles.desk}>
								<div className={styles.customInfo}>
									<span className={styles.name}>
										{item.name}
									</span>
									<span className={styles.date}>
										{getDate(item.createAt)}
									</span>
								</div>
								<div>
									<div className={styles.rate}>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<i className='fas fa-star'></i>
										<div
											className={styles.overlay}
											style={{
												width: `${Math.round(
													100 - item.rate * 20
												)}%`,
											}}
										></div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.review}>{item.text}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductDesc
