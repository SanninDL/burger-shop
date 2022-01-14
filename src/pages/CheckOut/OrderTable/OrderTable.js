import React from 'react'
import styles from './OrderTable.module.scss'
export default function OrderTable({ products }) {
	return (
		<div className={styles.wrap}>
			<h3>Order details</h3>
			<ul className={styles.productsList}>
				{products &&
					products.map((product, index) => (
						<li key={index} className={styles.item}>
							<div className={styles.info}>
								<div className={styles.img}>
									<img
										src={product.image}
										alt={product.name}
									/>
								</div>
								<div className={styles.content}>
									<div>{product.orderValues.name}</div>
									<div className={styles.count}>
										x {product.quantity}
									</div>
								</div>
							</div>
							<div className={styles.price}>
								${product.totalPrice}
							</div>
						</li>
					))}
			</ul>
		</div>
	)
}
