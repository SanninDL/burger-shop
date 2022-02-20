import styles from './Footer.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo-v2.png'

function Footer() {
	return (
		<footer className={styles.wrap}>
			<div className='container'>
				<div className={`row ${styles.footer}`}>
					<div className='col-lg-4 col-12'>
						<div className={styles.socialColumn}>
							<div className={styles.logo}>
								<img src={logo} alt='logo' />
							</div>
							<ul className={styles.socialList}>
								<li className={styles.socialItem}>
									<a
										href={'http://facebook.com'}
										rel='noreferrer'
										target='_blank'>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>
								<li className={styles.socialItem}>
									<a
										href={'https://instagram.com'}
										rel='noreferrer'
										target='_blank'>
										<i className='fab fa-instagram'></i>
									</a>
								</li>
								<li className={styles.socialItem}>
									<a
										href={'https://twitter.com'}
										rel='noreferrer'
										target='_blank'>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
								<li className={styles.socialItem}>
									<a
										href={'https://www.linkedin.com/'}
										rel='noreferrer'
										target='_blank'>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
						<div className={styles.contact}>
							<h3>Contact us </h3>
							<ul className={styles.contactList}>
								<li className={styles.contactItem}>
									<i className='fas fa-map-marker-alt'></i>
									<span> Street name 1, City </span>
								</li>
								<li className={styles.contactItem}>
									<i className='fas fa-phone-alt'></i>
									<span>+569 2698 0256 </span>
								</li>
								<li className={styles.contactItem}>
									<i className='fas fa-envelope'></i>
									<span>email@companyname.com </span>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
						<div className={styles.contact}>
							<h3>Opening hours</h3>
							<ul className={styles.contactList}>
								<li className={styles.contactItem}>
									<span>Monday – Friday </span>
								</li>
								<li className={styles.contactItem}>
									<span>10.00 AM – 11.00 PM </span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
