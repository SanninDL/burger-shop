// import { useState } from 'react'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop'
import CustomerCarousel from '../../layout/Carousel/CustomerCarousel'
import Contact from '../../layout/Contact/Contact'
import Delivery from '../../layout/Delivery/Delivery'
import DownloadApp from '../../layout/DownloadApp/DownloadApp'
import Hero from '../../layout/Hero/Hero'
import PopularList from '../../layout/PopularList/PopularList'
import Welcome from '../../layout/Welcome/Welcome'

function Home() {
	document.title = 'Gloyera'
	return (
		<>
			<ScrollToTop />
			<Hero />
			<Welcome />

			<PopularList />
			<Delivery />
			<CustomerCarousel />
			<DownloadApp />
			<Contact />
		</>
	)
}

export default Home
