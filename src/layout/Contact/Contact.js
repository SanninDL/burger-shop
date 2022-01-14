import { useState } from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
	const [isSubcribe, setIsSubcribe] = useState(false)

	const handleSubcribe = () => {
		setIsSubcribe(true)
	}
	return (
		<div className={styles.wrap}>
			<div className='container'>
				<h3>Let's connect!</h3>
				<p>
					Sign up for our newsletter & get a 10% off bill offers and
					invites!
				</p>
				{isSubcribe ? (
					<div className={styles.succes}>
						<div className={styles.icon}>
							<svg
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'>
								<g data-name='309-Email Check'>
									<path
										d='M15 27H1V5h30v10'
										fill='none'
										stroke='#e7272d'
										stroke-linejoin='round'
										stroke-width='2px'
										class='stroke-000000'></path>
									<path
										d='m1 5 15 11L31 5M20 22l3 3 7-7'
										fill='none'
										stroke='#e7272d'
										stroke-linejoin='round'
										stroke-width='2px'
										class='stroke-000000'></path>
								</g>
							</svg>
						</div>
						<div className={styles.text}>
							<p>Thank You!</p>
							<span>Your submission have been received</span>
						</div>
					</div>
				) : (
					<div className={styles.formGroup}>
						<div className={styles.formItem}>
							<input
								className={styles.inputControl}
								type='email'
								placeholder='Your email address'
							/>
						</div>
						<div className={styles.btn}>
							<button
								className='buttonPri'
								onClick={handleSubcribe}>
								<i className='fas fa-bell'></i>
								<span>Subscribe</span>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
