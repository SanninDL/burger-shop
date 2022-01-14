import React from 'react'

import MenuItem from './MenuItem'
import styles from './menuList.module.scss'

function MenuList(props) {
	const { list } = props

	return (
		<div className='container'>
			<div className={styles.wrap}>
				{/* <h2 className={styles.heading}>{heading}</h2> */}
				<div className={`row ${styles.list}`}>
					{list.map((product) => (
						<div
							className='col-12 col-lg-3 col-md-6'
							key={product.id}>
							<MenuItem item={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MenuList
