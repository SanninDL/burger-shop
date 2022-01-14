import styles from './Cart.module.scss'
import { useContext, useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HandelAdd } from '../../App'
import Toast from '../Toast/Toast'
import CartReviewItem from './CartReviewItem'
function Cart() {
	const [state] = useContext(HandelAdd)
	const { products, toast, subTotal } = state
	// const [showToast, setShowToast] = useState(false)
	const [isShowCart, setIsShowCart] = useState(false)
	const node = useRef(null)
	const url = useLocation().pathname

	window.onmousedown = function (e) {
		const target = e.target
		if (node.current && !node.current.contains(target)) {
			setIsShowCart(false)
		}
	}
	// useEffect(() => {
	// 	if (productOnAdd) {
	// 		setShowToast(true)
	// 		setTimeout(function () {
	// 			setShowToast(false)
	// 		}, 4000)
	// 	}
	// 	return () => {}
	// }, [productOnAdd])

	useEffect(() => {
		setIsShowCart(false)
	}, [url])

	const showCart = () => {
		setIsShowCart((prev) => !prev)
	}

	return (
		<>
			<div className={styles.cart} ref={node}>
				<div className={styles.cartIcon} onClick={showCart}>
					<i className='fas fa-shopping-cart'></i>
					<div className={styles.count}>
						<span>{products.length}</span>
					</div>
				</div>
				<div className={styles.openCartMobile}>
					<Link to='/check-cart'>
						<div className={styles.cartIconMobile}>
							<i className='fas fa-shopping-cart'></i>
							<div className={styles.count}>
								<span>{products.length}</span>
							</div>
						</div>
					</Link>
				</div>

				{isShowCart && (
					<div className={styles.listContainer}>
						{products.length > 0 ? (
							<div>
								<ul className={styles.list}>
									{products.map((item, index) => (
										<CartReviewItem
											product={item}
											key={index}
											index={index}
										/>
									))}
								</ul>
								<div className={styles.subtotal}>
									Subtotal: <span>${subTotal}</span>
								</div>
								<div className={styles.bottom}>
									<Link to='/check-cart'>View Cart</Link>
								</div>
							</div>
						) : (
							<div className={styles.noCart}>
								No products in your cart.
							</div>
						)}
					</div>
				)}
			</div>
			{toast && <Toast />}
			{/* <Toast /> */}
		</>
	)
}

export default Cart
