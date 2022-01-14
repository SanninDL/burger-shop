import styles from './Welcome.module.scss'
//
import React from 'react'
import { Link } from 'react-router-dom'
import welcome from '../../assets/img/welcome_image2-min.png'

export default function Welcome() {
	return (
		<div className='container'>
			<div className={styles.wrap}>
				<div className={styles.desk}>
					<div className={styles.label}>Welcome</div>
					<h2 className={styles.title}>
						We make the best burger in town
					</h2>
					<p>
						As well known and we are very busy all days advice you.
						advice you to call us of before arriving, so we can
						guarantee your seat. advice you to call us of before
						arriving, so we can
					</p>
					<div className={styles.btn}>
						<Link to='/Menu'>
							<button className='buttonPri'>
								<div className='text'>Order Now</div>
								{/* <div className='icon'>
								<i className='fas fa-long-arrow-alt-up'></i>
							</div> */}
							</button>
						</Link>
					</div>
				</div>

				<div className={styles.image}>
					<img src={welcome} alt='' />
				</div>
			</div>
		</div>
	)
}
