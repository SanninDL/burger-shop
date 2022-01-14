import styles from './MenuItem.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem(props) {
	const { item } = props
	const price = item.pickerAspects[0].pickerAspectOptions[0].price

	return (
		<div className={styles.item}>
			<Link to={`/Menu/${item.id}`}>
				{item.promotion && (
					<div className={styles.promotion}>
						<span>Sale</span>
					</div>
				)}

				<div className={styles.head}>
					<div className={styles.addBtn}>
						<button className={`buttonPriSmall ${styles.btn} `}>
							<i className='fas fa-cart-plus'></i>
							Order Now
						</button>
					</div>
					<div className={styles.img}>
						<img src={item.image} alt='' />
					</div>
				</div>
				<div className={styles.info}>
					<h3 className={styles.name}>{item.name}</h3>

					<div className={styles.bottom}>
						<div className={styles.price}>
							{item.promotion && (
								<span className={styles.deletePrice}>
									${price}
								</span>
							)}
							<span>
								$
								{item.promotion
									? (price + Number(item.promotion)).toFixed(
											2
									  )
									: price}
							</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default MenuItem
