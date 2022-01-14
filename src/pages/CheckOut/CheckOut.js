import React, { useContext, useState, useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { HandelAdd, SetBill } from '../../App'
import { CheckOutFields } from '../../constant'
import Pagination from '../../component/Pagination/Pagination'
import ProcessBar from '../../component/ProcessBar/ProcessBar'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop'
import CartTotal from '../CheckCart/CartTotal/CartTotal'
import CashMethod from './CashMethod/CashMethod'
import inputField from './inputField'
import OrderTable from './OrderTable/OrderTable'
import TextareaField from './TextareaField'
import Loading from '../../component/Loading/Loading'

import styles from './Checkout.module.scss'

function CheckOut() {
	const [isLoading, setIsLoading] = useState(false)
	const [state, dispatch] = useContext(HandelAdd)
	const { setBill } = useContext(SetBill)
	const { total, discount, delivery, subTotal, products } = state

	const navigate = useNavigate()

	useEffect(() => {
		document.title = 'Checkout - Gloyera'
	}, [])

	// submit check out
	const handleSubmit = (values) => {
		console.log('submit')
		const userInfo = {
			...values,
		}
		const bill = {
			...state,
			userInfo: userInfo,
			orderNumber: Date.now(),
			createAt: Date.now(),
		}
		setBill(bill)

		dispatch({
			type: 'addUserInfo',
			value: userInfo,
		})
		setIsLoading(true)
		setTimeout(() => {
			navigate('/order-received')
		}, 2000)
	}
	useEffect(() => {
		if (subTotal === 0) {
			navigate('/')
		}
		return () => {
			setIsLoading(false)
		}
	}, [navigate, subTotal])

	return (
		<div>
			<ScrollToTop />
			{isLoading && (
				<div className={styles.LoadingWrap}>
					<Loading />
				</div>
			)}
			<Pagination />
			<div className='container'>
				<ProcessBar activeItem={2} />
				<div className={styles.content}>
					<Formik
						initialValues={{
							name: '',
							phone: '',
							email: '',
							city: '',
							district: '',
							address: '',
							notes: '',
							cashMethod: 'CashOnDelivery',
						}}
						validationSchema={Yup.object({
							name: Yup.string().required('Required'),
							phone: Yup.number().required('Required'),
							city: Yup.string().required('Required'),
							district: Yup.string().required('Required'),
							address: Yup.string().required('Required'),
							email: Yup.string()
								.email('Invalid email address')
								.required('Required'),
						})}
						onSubmit={handleSubmit}>
						<Form>
							<div className={styles.formWrap}>
								<div className='row'>
									<div className='col-lg-7 col-12'>
										<h3>Billing details</h3>

										{CheckOutFields.map((field, index) => (
											<div
												key={index}
												className={styles.formGroup}>
												<Field
													type={field.type}
													name={field.name}
													label={field.label}
													placeholder={
														field.placeholder
													}
													component={inputField}
												/>
												<ErrorMessage
													name={field.name}
													render={(e) => (
														<div
															className={
																styles.errorMessage
															}>
															{e}
														</div>
													)}
												/>
											</div>
										))}
										<div className={styles.formGroup}>
											<Field
												name='notes'
												label='Order notes (optional)'
												placeholder='Notes about your order, e.g. special notes for delivery.'
												component={TextareaField}
											/>
										</div>
									</div>
									<div className='col-lg-5 col-12'>
										<OrderTable products={products} />
										<CartTotal
											total={total}
											discount={discount}
											delivery={delivery}
											subTotal={subTotal}
										/>

										<Field
											name='cashMethod'
											value='CashOnDelivery'
											type='radio'
											desc='Pay with cash upon delivery.'
											label='Cash on delivery'
											component={CashMethod}
										/>
										<Field
											name='cashMethod'
											value='Paypal'
											type='radio'
											desc='Pay via PayPal; you can pay with your credit card if you
					don’t have a PayPal account.'
											label='Paypal'
											component={CashMethod}
										/>
										<Field
											name='cashMethod'
											value='Bank'
											type='radio'
											desc='Make your payment directly into our bank account. Please use
					your Order ID as the payment reference. Your order will not
					be shipped until the funds have cleared in our account.'
											label='Direct bank transfer '
											component={CashMethod}
										/>

										{/* <CashMethod /> */}
										<div>
											<button
												className='buttonSquarePri'
												style={{
													display: 'block',
													marginTop: '20px',
													width: '100%',
												}}
												type='submit'>
												Place Order
												{/* <Link to='/order-received'>
													Place Order
												</Link> */}
											</button>
											{/* <button type='submit'>
												Submit
											</button> */}
										</div>
									</div>
								</div>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default CheckOut
