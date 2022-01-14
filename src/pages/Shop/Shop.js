import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import { productApi } from '../../api/productsApi'
import Loading from '../../component/Loading/Loading'
import MenuItem from '../../component/MenuList/MenuItem'
import Pagination from '../../component/Pagination/Pagination'
import ScrollToTop from '../../component/ScrollToTop/ScrollToTop'
import useGetApi from '../../Hooks/useGetApi'
import PaginationProduct from './PaginationProduct/PaginationProduct'
import styles from './Shop.module.scss'

const customStyles = {
	control: (styles) => ({
		...styles,
		width: '250px',
		fontFamily: 'inherit',
		border: '0',
		boxShadow: 'none',
	}),

	menu: (provided) => ({ ...provided, zIndex: 9999 }),

	valueContainer: (styles) => ({
		...styles,
	}),
	option: (styles, state) => ({
		...styles,
		backgroundColor: 'white',
		color: state.isSelected ? '#e7272d' : '#1e1d23',

		'&:hover': {
			backgroundColor: 'white',
			color: '#e7272d',
		},
	}),
}

const options = [
	{
		value: 'default',
		label: 'Default',
	},
	{
		value: 'priceLow',
		label: 'Price: Low to High',
	},
	{
		value: 'priceHigh',
		label: 'Price: High to Low',
	},
]
function Shop() {
	const [categoryActive, setCategoryActive] = useState({ name: 'All' })
	const [products, setProducts] = useState(null)
	const [query, setQuery] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages] = useState(8)
	const searchRef = useRef('')
	const defaultProduct = useRef(null)
	const categories = [{ name: 'All' }, ...useGetApi('getCategories')]
	const [loading, setLoading] = useState(true)

	document.title = 'Menu - Gloyera'

	// get product list
	useEffect(() => {
		const getApi = async () => {
			try {
				if (categoryActive.name === 'All') {
					const params = {
						name_like: query,
						_limit: 9,
						_page: currentPage,
					}
					const response = await productApi.getAll(params)
					setProducts(response)

					defaultProduct.current = response
					setLoading(false)
				} else {
					const params = {
						categoryId_like: categoryActive.id,
						name_like: query,
						_limit: 9,
						_page: currentPage,
					}
					const response = await productApi.getAll(params)
					setProducts(response)
					defaultProduct.current = response
					setLoading(false)
				}
			} catch (e) {
				console.log('error ', e)
			}
		}
		getApi()
	}, [categoryActive, query, currentPage])

	const onSetCategory = (category) => {
		setLoading(true)
		setCategoryActive(category)
		setQuery('')
	}

	const onChangeSort = (option) => {
		const sortValue = option.value
		const state = [...products]
		switch (sortValue) {
			case 'default':
				setProducts(defaultProduct.current)

				break
			case 'priceLow':
				state.sort(
					(a, b) =>
						a.pickerAspects[0].pickerAspectOptions[0].price -
						b.pickerAspects[0].pickerAspectOptions[0].price
				)

				setProducts(state)
				break
			case 'priceHigh':
				state.sort(
					(a, b) =>
						b.pickerAspects[0].pickerAspectOptions[0].price -
						a.pickerAspects[0].pickerAspectOptions[0].price
				)
				setProducts(state)
				break
			default:
				break
		}
	}
	const handleSearch = () => {
		setLoading(true)
		setCurrentPage(1)
		setQuery(searchRef.current.value)
		searchRef.current.value = ''
	}
	const handleSearchFocus = (e) => {
		window.onkeyup = (e) => {
			if (e.keyCode === 13) {
				handleSearch()
			}
		}
	}
	const handleReturn = () => {
		setLoading(true)
		setQuery('')
		setCategoryActive({ name: 'All' })
	}

	//  handle chnange pagination product
	const handleChangPage = (params) => {
		setLoading(true)
		setCurrentPage(params)
		window.scrollTo(0, 200)
	}

	return (
		<>
			<ScrollToTop />

			<Pagination paths={['Shop']} />

			<div className='container'>
				<div className={styles.wrap}>
					<div className='row'>
						<div className={`col-12 col-lg-3 ${styles.left}`}>
							<div className={styles.categoriesWrap}>
								<h5 className={styles.title}>
									Product categories
								</h5>
								<ul className={styles.list}>
									{categories.map((category, index) => (
										<li
											key={index}
											onClick={() =>
												onSetCategory(category)
											}
											className={
												category.name ===
												categoryActive.name
													? `${styles.active}  ${styles.item}`
													: styles.item
											}>
											<div
												className={styles.categoryName}>
												{category.name}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className='col-12 col-lg-9'>
							<div className={styles.right}>
								<div className={styles.control}>
									<div className={styles.inputBar}>
										<div className={styles.inputBox}>
											<input
												type='text'
												placeholder='Search products...'
												ref={searchRef}
												onFocus={handleSearchFocus}
											/>
										</div>
										<div
											className={styles.searchBtn}
											onClick={handleSearch}>
											<i className='fas fa-search'></i>
										</div>
									</div>
									<div className={styles.sortBar}>
										<Select
											options={options}
											placeholder='Sort by ...'
											styles={customStyles}
											onChange={onChangeSort}
										/>
									</div>
								</div>
								<div className={styles.productsListWrap}>
									{query !== '' && (
										<span className={styles.result}>
											Results for "{query}"
										</span>
									)}
									{!loading ? (
										<div
											className={`row ${styles.productsList}`}>
											{products.length > 0 ? (
												products.map((product) => (
													<div
														className='col-6 col-md-4 '
														key={product.id}>
														<MenuItem
															item={product}
														/>
													</div>
												))
											) : (
												<div>
													<h3>No results !!</h3>
													<button
														className='buttonSquarePri'
														onClick={handleReturn}>
														Return
													</button>
												</div>
											)}
										</div>
									) : (
										<div className={styles.LoadingWrap}>
											<Loading />
										</div>
									)}
								</div>

								<div className={styles.productPagination}>
									<PaginationProduct
										totalCount={totalPages}
										currentPage={currentPage}
										pageSize={4}
										handleChangPage={handleChangPage}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Shop
