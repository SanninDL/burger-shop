import styles from './PopularList.module.scss'
//
import React, { useEffect, useState } from 'react'
import { productApi } from '../../api/productsApi'
import { Link } from 'react-router-dom'
import PopularItem from './PopularItem'

export default function PopularList() {
	const [list, setList] = useState([])

	useEffect(() => {
		const getApi = async () => {
			try {
				const params = {
					_limit: 4,
					_page: 1,
				}
				const respone = await productApi.getAll(params)

				setList(respone)
			} catch (e) {
				console.log('error ', e)
			}
		}
		getApi()
	}, [])

	return (
		<div className='container'>
			<div className='section'>
				<div className='heading'>
					<h5>Specials Combo</h5>
					<h2>Most popular dishes</h2>
				</div>
				<div className={`row ${styles.list}`}>
					{list.map((product) => (
						<div
							className='col-12 col-md-6 col-xl-3 '
							key={product.id}>
							<PopularItem product={product} />
						</div>
					))}
				</div>
				<div className={styles.button}>
					<Link to='/Menu'>
						<button className='buttonIcon'>
							<div className='text'>See our full menu</div>
							<div className='icon'>
								<i className='fas fa-long-arrow-alt-up'></i>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
