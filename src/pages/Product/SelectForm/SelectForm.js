import styles from './SelectForm.module.scss'
import { Field, Form, Formik } from 'formik'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HandelAdd } from '../../../App'
import QuantityField from './QuantityField'
import SelectField from './SelectField'

export default function SelectForm({ product, isEdit }) {
	const [state, dispatch] = useContext(HandelAdd)
	const [unitPrice, setUnitPrice] = useState(
		product.unitPrice ||
			product.pickerAspects[0].pickerAspectOptions[0].price +
				Number(product.promotion)
	)
	const [quantity, setQuantity] = useState(product.quantity)
	const [pickerValue, setPickerValue] = useState(
		product.orderValues?.pickerValue || product.options[0].pickerValue
	)
	const [otherOptions, setOtherOptions] = useState(product.options[0].items)
	const [initialValuesForm, setInitialValuesForm] = useState({
		pickerValue: '',
		quantity: product.quantity,
	})
	const navigate = useNavigate()
	const formRef = useRef(null)

	// ====== change initialValuesForm khi pickerValue thay doi
	useEffect(() => {
		const options = product.options.find(
			(productOption) => productOption.pickerValue === pickerValue
		)
		setOtherOptions(options.items)
		const optionsDefault = options.items.reduce((total, item) => {
			return {
				...total,
				[item.name]: item.options[0]._id,
			}
		}, {})
		setInitialValuesForm({
			pickerValue: pickerValue || '',
			...optionsDefault,
			quantity: product.quantity,
		})
	}, [pickerValue, product])

	//  ======= setInitialValuesForm lan dau tien mount
	useEffect(() => {
		if (product.orderValues) {
			const initOptions = product.options.find(
				(option) =>
					option.pickerValue === product.orderValues.pickerValue
			)
			const childrenInitValues = product.orderValues.items.reduce(
				(total, item) => ({
					...total,
					[item.name]: item.options[0]._id,
				}),
				{}
			)

			setOtherOptions(initOptions.items)
			setInitialValuesForm({
				pickerValue: product.orderValues.pickerValue,
				...childrenInitValues,
				quantity: product.quantity,
			})
		} else {
			const optionsDefault = product.options[0].items.reduce(
				(total, item) => {
					return {
						...total,
						[item.name]: item.options[0]._id,
					}
				},
				{}
			)
			setInitialValuesForm({
				pickerValue: product.options[0].pickerValue,
				...optionsDefault,
				quantity: product.quantity,
			})
		}
	}, [product])

	// ==== handle change form, update price
	const handleChange = (name, option) => {
		if (name === 'quantity') {
			setQuantity(option)
		} else {
			setPickerValue(option.value)
			const promotionPrice = Number(product.promotion)
			const nextPrice = option.price
				? option.price + promotionPrice
				: unitPrice
			setUnitPrice(nextPrice)
		}
	}

	// ======== submit form
	const handleSubmit = (values, { resetForm }) => {
		const currentProduct = { ...product }
		const optionSelected = currentProduct.options.find(
			(productOption) => productOption.pickerValue === values.pickerValue
		)
		optionSelected.items.forEach((item) => {
			const option = item.options.find(
				(option) => option._id === values[item.name]
			)
			item.options = [option]
		})
		const newProduct = {
			orderId: isEdit
				? currentProduct.orderId
				: Number(state.currentId) + 1,
			orderValues: optionSelected,
			quantity: quantity,
			unitPrice: unitPrice,
			id: currentProduct.id,
			image: currentProduct.image,
			name: currentProduct.name,
		}
		const type = isEdit ? 'update' : 'add'

		dispatch({
			type: type,
			payload: newProduct,
		})
		const status = isEdit ? 'updated in cart.' : 'added to cart.'
		dispatch({
			type: 'addToast',
			payload: {
				product: newProduct,
				status: status,
			},
		})

		resetForm()
		if (type === 'update') {
			setTimeout(() => {
				navigate('/Menu')
			}, 1000)
		} else {
			window.scrollTo(0, 200)
			setPickerValue(
				product.orderValues?.pickerValue ||
					product.options[0].pickerValue
			)
			setQuantity(product.quantity)
			setUnitPrice(
				product.unitPrice ||
					product.pickerAspects[0].pickerAspectOptions[0].price
			)
		}
	}

	return (
		<div>
			<Formik
				initialValues={initialValuesForm}
				enableReinitialize
				onSubmit={handleSubmit}
				innerRef={formRef}>
				<Form>
					<div className={styles.formWrap}>
						<div>
							{(!product.pickerAspects[0].uiHide ||
								otherOptions.length > 0) && (
								<>
									<h6
										style={{
											fontSize: '26px',
											textAlign: 'center',
										}}>
										Choose your Burger
									</h6>

									<div className={`row ${styles.selectWrap}`}>
										{!product.pickerAspects[0].uiHide && (
											<div className='col-12 col-lg-6'>
												<Field
													name='pickerValue'
													label={
														product.pickerAspects[0]
															.name
													}
													component={SelectField}
													handleChange={handleChange}
													options={
														product.pickerAspects[0]
															.pickerAspectOptions
													}
												/>
											</div>
										)}
										<div className='col-12 col-lg-6'>
											{otherOptions.map(
												(option, index) => (
													<Field
														key={index}
														name={option.name}
														label={option.name}
														component={SelectField}
														options={option.options}
													/>
												)
											)}
										</div>
									</div>
								</>
							)}
						</div>
						<div className={styles.bottom}>
							<Field
								name='quantity'
								label='Select Quantity'
								component={QuantityField}
								handleChange={handleChange}
								quantity={quantity}
								price={(unitPrice * quantity).toFixed(2)}
							/>
							<div style={{ marginTop: '20px' }}>
								<button
									type='submit'
									className='buttonSquarePri'
									style={{ width: '100%' }}>
									{isEdit ? 'UPDATE' : 'ADD'} {' - '}
									{(unitPrice * quantity).toFixed(2)}
								</button>
							</div>
						</div>
					</div>
				</Form>
			</Formik>
		</div>
	)
}
