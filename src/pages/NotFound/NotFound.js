import styles from './NotFound.module.scss'
import notFoundBurger from '../../assets/img/404-burger.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.top}>
					<h2 className={styles.pageTitle}>Page Not Found</h2>
				</div>
				<div className={styles.img}>
					<img src={notFoundBurger} alt='' />
				</div>
				<div className={styles.text}>
					<p>
						<strong>Whoops!</strong>
					</p>
					<p>The page you were looking for was moved or doesn't exist</p>
				</div>
				<div className={styles.btn}>
					<Link to='/'>
						<button className='buttonPri'>Homepage</button>
					</Link>
				</div>
			</div>
		</>
	)
}
