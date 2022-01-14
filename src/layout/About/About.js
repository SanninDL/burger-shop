import React from 'react'
import styles from './About.module.scss'
import icon1 from '../../assets/img/burger-icon.png'
import icon2 from '../../assets/img/burger-icon-2.png'
import icon3 from '../../assets/img/burger-icon-3.png'

function About() {
	return (
		<div className={styles.about}>
			<div className='container'>
				<div className={`box ${styles.infoWrap}`}>
					<div className='row'>
						<div className={`col-lg-4 col-12  ${styles.infoItem}`}>
							<div className={styles.icon}>
								<i className='fas fa-clock'></i>
							</div>
							<h4>10:00am - 9:00pm</h4>
							<p>Open hours</p>
						</div>
						<div className={`col-lg-4 col-12  ${styles.infoItem}`}>
							<div className={styles.icon}>
								<i className='fas fa-location-arrow'></i>
							</div>
							<h4>1 Churchill Road, London N1</h4>
							<p>Find us</p>
						</div>
						<div className={`col-lg-4 col-12  ${styles.infoItem}`}>
							<div className={styles.icon}>
								<i className='fas fa-phone-alt'></i>
							</div>
							<h4>+44 020 5678 908</h4>
							<p>Call us</p>
						</div>
					</div>
				</div>
			</div>

			<div className='section'>
				<div className='heading'>
					<h5>A little about us</h5>
					<h2>Our ethos and service</h2>
				</div>
				<div className={styles.service}>
					<div className='container'>
						<div className='row'>
							<div className='col-12 col-lg-4'>
								<div className={styles.serviceItem}>
									<div className={styles.icon}>
										<img src={icon1} alt='' />
									</div>
									<h3>Quality Food</h3>
									<p>
										Everything you order will be quickly
										delivered to your door.
									</p>
								</div>
							</div>
							<div className='col-12 col-lg-4'>
								<div className={styles.serviceItem}>
									<div className={styles.icon}>
										<img src={icon2} alt='' />
									</div>
									<h3>Original Recipes</h3>
									<p>
										Poco is an international chain of family
										restaurants.
									</p>
								</div>
							</div>
							<div className='col-12 col-lg-4'>
								<div className={styles.serviceItem}>
									<div className={styles.icon}>
										<img src={icon3} alt='' />
									</div>
									<h3>Fast Dlivery</h3>
									<p>
										Sign up for updates and get free
										shipping
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
