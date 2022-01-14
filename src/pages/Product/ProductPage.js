import styles from './ProductPage.module.scss'

import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import { productApi } from '../../api/productsApi'
import { HandelAdd } from '../../App'
import Pagination from '../../component/Pagination/Pagination'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop'
import SelectForm from './SelectForm/SelectForm'
import Loading from '../../component/Loading/Loading'

function ProductPage() {
	const [state] = useContext(HandelAdd)
	const [product, setProduct] = useState(null)
	const { productId } = useParams()
	const location = useLocation().search
	const params = new URLSearchParams(location)
	const isEdit = params.get('edit')
	const price = product
		? product.pickerAspects[0].pickerAspectOptions[0].price
		: 0

	useEffect(() => {
		if (!isEdit) {
			const getApi = async () => {
				try {
					const params = {
						id: productId,
					}
					const response = await productApi.getOne(params)
					setProduct(response[0])
					document.title = `${response[0].name} - Gloyera`
				} catch (e) {
					console.log('error ', e)
				}
			}
			getApi()
		}
	}, [productId, isEdit])

	useEffect(() => {
		let isMount = true
		if (isEdit) {
			const getApi = async () => {
				try {
					const params = {
						id: productId,
					}
					const response = await productApi.getOne(params)
					if (isMount) {
						const productNeedEdit = state.products[Number(isEdit)]
						const productEdit = {
							...response[0],
							orderValues: productNeedEdit.orderValues,
							quantity: productNeedEdit.quantity,
							orderId: productNeedEdit.orderId,
							unitPrice: productNeedEdit.unitPrice,
						}
						setProduct(productEdit)
						document.title = `${response[0].name} - Gloyera`
					} else {
						return null
					}
				} catch (e) {
					console.log('error ', e)
				}
			}
			getApi()
		}
		return () => {
			isMount = false
		}
	}, [productId, isEdit, state])
	return (
		<>
			<ScrollToTop />
			<Pagination product={product} />
			{!product && (
				<div className={styles.LoadingWrap}>
					<Loading />
				</div>
			)}
			<div className='container'>
				<div className={styles.productWrap}>
					{product && (
						<>
							<div className={`row ${styles.heading}`}>
								<div className='col-12 col-lg-6'>
									<div className={styles.productImg}>
										<img
											src={product?.image}
											alt={product?.name}
										/>
									</div>
								</div>
								<div className='col-12 col-lg-6'>
									<div className={styles.ProductContent}>
										<h1 className={styles.name}>
											{product?.name}
										</h1>
										<div className={styles.info}>
											{product?.promotion && (
												<span
													className={
														styles.deletePrice
													}>
													${price}
												</span>
											)}
											<span className={styles.price}>
												$
												{product.promotion
													? (
															price +
															Number(
																product.promotion
															)
													  ).toFixed(2)
													: price}
											</span>
										</div>
										<p className={styles.desc}>
											{product?.description}
										</p>

										<div className={styles.socialWrap}>
											<button className={styles.shareBtn}>
												<i className='fas fa-share-alt'></i>
												<span>Share</span>
											</button>
											<ul className={styles.social}>
												<li>
													<i className='fab fa-facebook-f'></i>
												</li>
												<li>
													<i className='fab fa-twitter'></i>
												</li>

												<li>
													<i className='fab fa-pinterest'></i>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							{product && (
								<SelectForm product={product} isEdit={isEdit} />
							)}
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default ProductPage
