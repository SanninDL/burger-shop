import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HandelAdd, SetBill } from '../../App'
import Pagination from '../../component/Pagination/Pagination'
import ProcessBar from '../../component/ProcessBar/ProcessBar'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop'
import { getDateFunction } from '../../constant'
import CartTotal from '../CheckCart/CartTotal/CartTotal'
import OrderTable from '../CheckOut/OrderTable/OrderTable'
import styles from './OrderReceived.module.scss'

export default function OrderReceived() {
	const [, dispatch] = useContext(HandelAdd)
	const { bill } = useContext(SetBill)
	const navigate = useNavigate()
	const {
		createAt,
		orderNumber,
		products,
		total,
		discount,
		delivery,
		subTotal,
	} = bill
	useEffect(() => {
		document.title = 'Checkout - Gloreya'
	}, [])
	useEffect(() => {
		if (!products) {
			navigate('/')
		}
		dispatch({
			type: 'reset',
			value: {},
		})
	}, [dispatch, products, navigate])
	return (
		<div>
			<ScrollToTop />
			<Pagination />
			<div className='container'>
				<ProcessBar activeItem={3} />
				<div className={styles.content}>
					<h3>Thank you. Your order has been received. </h3>
					<div className={styles.info}>
						<div className={styles.infoItem}>
							<span className={styles.label}>Order number: </span>
							<span>{orderNumber}</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.label}>Date</span>
							<span>{getDateFunction(createAt)}</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.label}>Total: </span>
							<span>${total}</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.label}>
								Payment method:
							</span>
							<span>Direct bank transfer</span>
						</div>
					</div>
					<div className={styles.details}>
						<OrderTable products={products} />
						<CartTotal
							total={total}
							discount={discount}
							delivery={delivery}
							subTotal={subTotal}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
