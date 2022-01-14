import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { paths } from '../../constant'
import styles from './Pagination.module.scss'

function Pagination({ product }) {
	const navigate = useLocation().pathname

	const pathName = paths.find(
		(item) => navigate.indexOf(item.path) >= 0
	).label

	return (
		<div className={styles.paginationWrap}>
			<div className='container'>
				<div className={styles.paginationBar}>
					<div className={styles.pageTitle}>
						<h2>{product ? 'Product' : pathName}</h2>
					</div>
					<div className={styles.pageLevel}>
						<Link to='/'>Home</Link>
						<i className='fas fa-chevron-right'></i>
						<Link
							to='/Menu'
							style={product ? {} : { fontWeight: 'bold' }}>
							{pathName}
						</Link>
						{product && (
							<>
								<i className='fas fa-chevron-right'></i>
								<Link
									to={`/Menu/${product.id}`}
									style={{ fontWeight: 'bold' }}>
									{product.name}
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pagination
