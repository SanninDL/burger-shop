import styles from './PopularItem.module.scss'
//
import React from 'react'
import border from '../../assets/img/menu_border_shape.png'
import borderTop from '../../assets/img/menu_grunge.png'
import { Link } from 'react-router-dom'

export default function PopularItem({ product }) {
	const price = product.pickerAspects[0].pickerAspectOptions[0].price

	return (
		<div className={styles.item}>
			<div className={styles.border}>
				<img src={border} alt='' />
			</div>
			<div className={styles.borderTop}>
				<img src={borderTop} alt='' />
			</div>
			<div className={styles.info}>
				<div className={styles.name}>
					<h3>{product.name}</h3>
					<p>{product.description}</p>
				</div>
				<div className={styles.bottom}>
					<h4>${price}</h4>
					<Link to={`/Menu/${product.id}`}>
						<button className='buttonPri'>
							<i className='fas fa-shopping-cart'></i>
							<span>Order Now</span>
						</button>
					</Link>
				</div>
			</div>
			<div className={styles.image}>
				<img src={product.image} alt={product.name} />
			</div>
		</div>
	)
}
