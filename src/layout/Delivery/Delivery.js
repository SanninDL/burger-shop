import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Delivery.module.scss'
import deliveryBike from '../../assets/img/delivery_bike-min.png'

export default function Delivery() {
	return (
		<div className={styles.wrap}>
			<div className={styles.img}>
				<img src={deliveryBike} alt='' />
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-xl-7'>
						<div className={styles.left}>
							<span className={styles.label}>Delivery</span>
							<h2 className={styles.title}>
								Choose what you want, select a pick up time
							</h2>
							<p>
								As well known and we are very busy all days
								advice you. advice you to call us of before
								arriving, so we can guarantee your seat.
							</p>
							<div className={styles.btn}>
								<Link to='/Menu'>
									<button className='buttonPri'>
										<i className='fas fa-shopping-cart'></i>
										<span className='text'>Order Now</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-12 col-xl-5'>
						<div className={styles.right}>
							<span className={styles.label}>Reward</span>
							<h2 className={styles.title}>
								Earn points every time you order online
							</h2>
							<p>
								As well known and we are busy all days advice
								you. advice you to call us of before arriving,
								so we can guarantee your seat. advice
							</p>
							<div className={styles.btn}>
								<Link to='/Menu'>
									<button className='buttonPri'>
										<i className='fas fa-plus-circle'></i>
										<span>Learn More</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
