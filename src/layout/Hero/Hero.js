import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'
import image from '../../assets/img/slider-img.png'

export default function Hero() {
	return (
		<div className={styles.wrap}>
			<div className='container-fluid'>
				<div className={`row ${styles.content}`}>
					<div className={`col-7 ${styles.desk}`}>
						<div className={styles.subTitle}>New In Menu</div>
						<h2 className={styles.name}>Double Mushroom Burger</h2>
						<div className={styles.banner}>
							<ul className={styles.list}>
								<li>Bacon</li>
								<li>Cheese</li>
								<li>Mushroom</li>
							</ul>
							<div className={styles.priceWrap}>
								<div>Only</div>
								<div className={styles.price}>$15.99</div>
							</div>
							<div className={styles.btn}>
								<Link to='/Menu'>
									<i className='fas fa-cart-plus'></i>
								</Link>
							</div>
						</div>
					</div>
					<div className={`col-5 ${styles.img}`}>
						<img src={image} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
