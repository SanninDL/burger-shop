import styles from './Header.module.scss'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ToTopBtn from '../../pages/Home/ToTopBtn/ToTopBtn'
import Cart from '../Cart/Cart'
// import logo from '../../assets/img/logo.png'
import logo from '../../assets/img/logo-v2.png'

function Header() {
	const [headerSticky, setHeaderSticky] = useState(false)
	const [showToTopBtn, setShowToTopBtn] = useState(false)
	const [openNav, setOpenNav] = useState(false)
	const navRef = useRef(null)

	const url = useLocation().pathname

	useEffect(() => {
		const viewWidth = window.innerWidth
		if (Number(viewWidth) <= 768) {
			navRef.current.style.height = '0'
			setOpenNav(false)
		}
	}, [url])

	window.onscroll = function () {
		const scroll =
			document.body.scrollTop || document.documentElement.scrollTop
		if (scroll < 100) {
			setHeaderSticky(false)
			setShowToTopBtn(false)
		} else {
			setHeaderSticky(true)
			if (scroll < 400) {
				setShowToTopBtn(false)
			} else {
				setShowToTopBtn(true)
			}
		}
	}
	const handleOpenNav = () => {
		if (openNav) {
			navRef.current.style.height = '0'
			setOpenNav(false)
		} else {
			navRef.current.style.height = '200px'
			setOpenNav(true)
		}
	}

	return (
		<>
			<div className={headerSticky ? styles.sticky : styles.wrap}>
				<div className='container'>
					<div className={styles.header}>
						<Link to='/' className={styles.link}>
							<div className={styles.logo}>
								<div className={styles.img}>
									<img src={logo} alt='logo' />
								</div>
							</div>
						</Link>
						<div className={styles.navWrap}>
							{/* button open nav on mobile */}
							<div
								className={styles.openNavBtn}
								onClick={handleOpenNav}>
								<button>
									{openNav ? (
										<i className='fas fa-times'></i>
									) : (
										<i className='fas fa-bars'></i>
									)}
								</button>
							</div>
							{/*  */}
							<ul className={styles.nav} ref={navRef}>
								<li className={styles.navItem}>
									<Link to='/'>Home</Link>
								</li>

								<li className={styles.navItem}>
									<Link to='/Menu'>Menu</Link>
								</li>
								<li className={styles.navItem}>
									<Link to='/check-cart'>Cart</Link>
								</li>
							</ul>
							<Cart />
						</div>
					</div>
				</div>
			</div>
			<ToTopBtn showToTopBtn={showToTopBtn} />
		</>
	)
}

export default Header
