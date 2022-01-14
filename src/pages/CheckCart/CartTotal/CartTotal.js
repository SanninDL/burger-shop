import React from 'react'
import styles from './CartTotal.module.scss'

function CartTotal({ total, discount, delivery, subTotal }) {
	return (
		<div className={styles.wrap}>
			<h5>Cart totals</h5>
			<table className={styles.tableTotal}>
				<tbody>
					<tr>
						<th>Subtotal</th>
						<td>${subTotal}</td>
					</tr>
					<tr>
						<th>Delivery charges</th>
						<td>${delivery}</td>
					</tr>
					<tr>
						<th>Discount</th>
						<td>{discount ? discount.price : 0}$</td>
					</tr>
					<tr className={styles.orderTotal}>
						<th>Total</th>
						<td>${total}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default CartTotal
