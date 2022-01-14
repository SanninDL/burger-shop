import React from 'react'
import styles from './CustomerCarousel.module.scss'

import Star from '../../component/Star/Star'
import { customerReviews } from '../../constant'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CustomPrevArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<div
			className={`${className} ${styles.control} ${styles.prev}`}
			style={{
				...style,
			}}
			onClick={onClick}>
			<div className={styles.controlBtn}>
				<i className='fas fa-long-arrow-alt-left'></i>
			</div>
		</div>
	)
}
const CustomNextArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<div
			className={`${className} ${styles.control} ${styles.next}`}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.controlBtn}>
				<i className='fas fa-long-arrow-alt-right'></i>
			</div>
		</div>
	)
}

export default function CustomerCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		swipeToSlide: true,
		initialSlide: 0,

		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					swipeToSlide: true,
				},
			},
		],
	}
	return (
		<div className={styles.wrap}>
			<div className='container'>
				<div className='section'>
					<div className='heading'>
						<h5>Testimonials</h5>
						<h2>Our customers say</h2>
					</div>
					<div className={styles.carouselWrap}>
						<Slider {...settings}>
							{customerReviews.map((customer, index) => (
								<div key={index} className={styles.itemWrap}>
									<div className={styles.item}>
										<div className={styles.user}>
											<div className={styles.avatar}>
												<img
													src={customer.img}
													alt={customer.name}
												/>
												<div className={styles.quote}>
													<i className='fas fa-quote-right'></i>
												</div>
											</div>
											<div className={styles.name}>
												<h6>{customer.name}</h6>
											</div>
										</div>
										<div className={styles.star}>
											<Star number={customer.star} />
										</div>
										<p className={styles.text}>
											"{customer.text}"
										</p>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}
