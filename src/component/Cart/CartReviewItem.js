import styles from './CartReviewItem.module.scss'
import React, { useContext } from 'react'
import SelectNumber from '../SelectNumber/SelectNumber'
import { HandelAdd } from '../../App'
import { Link } from 'react-router-dom'

export default function CartReviewItem({ product, index }) {
	const [, dispatch] = useContext(HandelAdd)

	const handleChangeQuantity = (quantity) => {
		const newProduct = {
			...product,
			quantity: quantity,
		}
		dispatch({
			type: 'update',
			payload: newProduct,
		})
	}

	const handelRemoveCart = () => {
		dispatch({
			type: 'remove',
			payload: index,
		})
	}
	return (
		<div className={styles.wrap}>
			<div className={styles.info}>
				<h2 className={styles.name}>{product.orderValues.name}</h2>
				<div className={styles.price}>${product.totalPrice}</div>
			</div>
			<div className={styles.control}>
				<div className={styles.left}>
					<button className='textBtn'>
						<Link to={`/Menu/${product.id}?edit=${index}`}>
							Edit
						</Link>
					</button>
					<button className='textBtn' onClick={handelRemoveCart}>
						Remove
					</button>
				</div>
				<div className={styles.right}>
					<SelectNumber
						quantity={product.quantity}
						setQuantity={handleChangeQuantity}
					/>
				</div>
			</div>
		</div>
	)
}
