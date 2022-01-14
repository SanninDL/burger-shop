import React from 'react'
import styles from './Loading.module.scss'
import img from '../../assets/gif/1123546.png'

export default function Loading() {
	return (
		<div className={styles.wrap}>
			<div className={styles.loadingBox}>
				<div className={styles.loadingImg}>
					<div className={styles.img}>
						<img src={img} alt='' />
					</div>
					<div className={styles.loadingRoll}>
						<div className={styles.ldsRoller}>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
