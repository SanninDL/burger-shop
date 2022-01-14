import { useContext, useEffect } from 'react'
import { HandelAdd } from '../../App'
import styles from './Toast.module.scss'

function Toast() {
	const [state, dispatch] = useContext(HandelAdd)
	const { toast } = state

	useEffect(() => {
		const clearToast = setTimeout(function () {
			dispatch({
				type: 'removeToast',
				payload: null,
			})
		}, 4000)
		return () => {
			clearTimeout(clearToast)
		}
	}, [dispatch])

	return (
		<div className={styles.wrap}>
			<div className={styles.icon}>
				<i className='fas fa-check-circle'></i>
			</div>
			<div className={styles.info}>
				<span className={styles.name}>
					{toast?.product.orderValues.name}
				</span>
				<span>{toast.status}</span>
			</div>
			<button
				className={styles.close}
				onClick={() =>
					dispatch({
						type: 'removeToast',
						payload: null,
					})
				}>
				<i className='fas fa-times'></i>
			</button>
		</div>
	)
}

export default Toast
