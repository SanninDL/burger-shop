import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HandelAdd } from '../../../App'
import SelectNumber from '../../../component/SelectNumber/SelectNumber'
import styles from './ProductRow.module.scss'

function ProductRow({ product, index }) {
	const [, dispatch] = useContext(HandelAdd)

	const onChangeInputQuantity = (quantity) => {
		const newProduct = {
			...product,
			quantity: quantity,
		}

		dispatch({
			type: 'update',
			payload: newProduct,
		})
	}

	return (
		<>
			<div className={`row ${styles.productRow}`}>
				<div className='col-md-2 col-sm-3 col-4'>
					<div className={styles.img}>
						<img src={product.image} alt='' />
					</div>
				</div>
				<div className='col-md-10 col-sm-9 col-8'>
					<div className={`row ${styles.productContent}`}>
						<div className={`col-12 col-md-6`}>
							<div className={styles.productInfo}>
								<div className={styles.children}>
									<div className={styles.name}>
										{product.orderValues.name}
									</div>
									<ul className={styles.item}>
										<li>
											{product.orderValues.mainItem.name}
										</li>
										{product.orderValues.items.map(
											(item, index) => (
												<li key={index}>
													{item.options[0].name}
												</li>
											)
										)}
									</ul>
								</div>
								<div className={styles.unitPrice}>
									${product.unitPrice}
								</div>
							</div>
						</div>
						<div
							className={`col-12 col-md-6 ${styles.productControl}`}>
							<div className='row'>
								<div className={`col-12 col-sm-4 col-md-5 `}>
									<div className={styles.productAmount}>
										<SelectNumber
											quantity={product.quantity}
											setQuantity={onChangeInputQuantity}
										/>
									</div>
								</div>
								<div
									className={`col-lg-3 hideOnSmallPC ${styles.subTotal}`}>
									<span>${product.totalPrice}</span>
								</div>
								<div
									className={`col-12 col-sm-8 col-md-7 col-lg-4 ${styles.control}`}>
									<button>
										<Link
											to={`/Menu/${product.id}?edit=${index}`}>
											Edit
											<i className='fas fa-edit'></i>
										</Link>
									</button>
									<button
										onClick={() =>
											dispatch({
												type: 'remove',
												payload: index,
											})
										}>
										Remove
										<i className='fas fa-trash-alt'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductRow
