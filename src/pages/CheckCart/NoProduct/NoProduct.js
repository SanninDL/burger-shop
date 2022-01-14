import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NoProduct.module.scss'

function NoProduct() {
	return (
		<div className={styles.wrap}>
			<h5>Ops! There is nothing in your cart</h5>
			<p>Explore around to add items to your shopping cart </p>
			<Link to='/Menu'>
				<div className='buttonSquarePri'>Return to Shop</div>
			</Link>
		</div>
	)
}

export default NoProduct
