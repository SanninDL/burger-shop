import styles from './DownloadApp.module.scss'
import React from 'react'
import playStore from '../../assets/img/play_store.png'
import appStore from '../../assets/img/app_store.png'
import appImage from '../../assets/img/app_image.png'

export default function DownloadApp() {
	return (
		<div className={styles.wrap}>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-lg-6'>
						<div className={styles.desk}>
							<div
								className='section'
								style={{ textAlign: 'left' }}>
								<div className='heading'>
									<h5>Download App</h5>
									<h2>
										Download the app. Click sit back and
										enjoy.
									</h2>
								</div>

								<p>
									As well known and we are very busy all days
									advice you. advice you to call us of before
									arriving, so we can guarantee your seat.
									advice you to call us of before arriving, so
									we can
								</p>

								<div className={styles.appList}>
									<div className={styles.app}>
										<a
											href='https://play.google.com/store'
											target='_blank'
											rel='noopener noreferrer'>
											<img src={playStore} alt='' />
										</a>
									</div>
									<div className={styles.app}>
										<a
											href='https://www.apple.com/vn/app-store/'
											target='_blank'
											rel='noopener noreferrer'>
											<img src={appStore} alt='' />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6 col-12'>
						<div className={styles.img}>
							<img src={appImage} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
