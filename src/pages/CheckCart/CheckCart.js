import styles from './CheckCart.module.scss'

import { useContext, useEffect, useRef, useState } from 'react'
import { HandelAdd } from '../../App'

import CartTotal from './CartTotal/CartTotal'
import ProductRow from './ProductRow/ProductRow'

import NoProduct from './NoProduct/NoProduct'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop'
import ProcessBar from '../../component/ProcessBar/ProcessBar'
import Pagination from '../../component/Pagination/Pagination'
import { Link } from 'react-router-dom'
import { couponArray } from '../../constant'

function CheckCart() {
	const [state, dispatch] = useContext(HandelAdd)
	const { products, discount, delivery, subTotal, total } = state
	const [notValid, setNotValid] = useState(false)
	const inputRef = useRef(null)

	useEffect(() => {
		document.title = 'Cart - Gloyera'
	}, [])

	useEffect(() => {
		const discountPrice = discount ? discount.price : 0
		const newTotal = Number(subTotal) + Number(delivery) + discountPrice
		const action = {
			type: 'setTotal',
			value: newTotal.toFixed(2),
		}
		dispatch(action)
		return () => {}
	}, [subTotal, discount, delivery, dispatch])

	const handleAddCoupon = () => {
		const value = inputRef.current.value.toLowerCase()
		const index = couponArray.findIndex((coupon) => coupon.code === value)
		if (index >= 0) {
			dispatch({
				type: 'setDiscount',
				payload: couponArray[index],
			})
			inputRef.current.value = ''
		} else {
			setNotValid(true)
		}
	}

	const onDeleteCoupon = () => {
		dispatch({
			type: 'setDiscount',
			payload: null,
		})
	}

	return (
		<>
			<ScrollToTop />
			<Pagination />
			<div className='container'>
				<ProcessBar activeItem={1} />

				{products.length === 0 ? (
					<NoProduct />
				) : (
					<div className={styles.wrap}>
						<h4 className={styles.titlePage}>Your Cart</h4>
						<div
							className={`hideOnTablet row ${styles.rowHeading}`}>
							<div className='col-md-2 col-sm-3 col-4'>
								Product
							</div>
							<div className='col-md-10 col-sm-9 col-8'>
								<div className='row'>
									<div className='col-12 col-md-6'></div>
									<div className='col-12 col-md-6'>
										<div className='row'>
											<div className='col-9 col-md-5 text-center'>
												Quantity
											</div>
											<div className='col-lg-3 hideOnSmallPC text-center'>
												Price
											</div>
											<div className='col-4'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{products.map((product, index) => (
							<ProductRow
								product={product}
								key={index}
								index={index}
							/>
						))}

						<div className={styles.inputControl}>
							<div className={styles.couponBox}>
								<input
									onFocus={() => setNotValid(false)}
									ref={inputRef}
									type='text'
									placeholder='Coupon code'
									className={styles.couponInput}
								/>
								<button
									className='buttonPri'
									onClick={handleAddCoupon}>
									Apply Coupon
								</button>
							</div>
							{notValid && (
								<div className={styles.message}>
									The coupon code is not valid!
								</div>
							)}
							{discount && (
								<div className={styles.couponSelected}>
									<button onClick={onDeleteCoupon}>
										<i className='fas fa-times'></i>
									</button>
									<span>
										<strong>{discount.code}</strong> is
										applied!
									</span>
								</div>
							)}
						</div>
						<div className='row'>
							<div className='offset-md-6 col-md-6 col-12'>
								<CartTotal
									total={total}
									discount={discount}
									delivery={delivery}
									subTotal={subTotal}
								/>
								<div className={styles.buttonSubmit}>
									<Link to='/checkout'>
										<button className='buttonPri'>
											Proceed to checkout
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default CheckCart
