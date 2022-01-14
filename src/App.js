import React, { createContext, useEffect, useReducer, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import './helper/global.scss'
import './helper/grid.scss'
import CheckCart from './pages/CheckCart/CheckCart'
import CheckOut from './pages/CheckOut/CheckOut'
import Home from './pages/Home/Home'
import OrderReceived from './pages/OrderReceived/OrderReceived'
import ProductPage from './pages/Product/ProductPage'
import reducer, { initialState } from './store/reducer'
import Shop from './pages/Shop/Shop'

//

export const HandelAdd = createContext()
export const SetBill = createContext()

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [bill, setBill] = useState({})
	useEffect(() => {
		const saveState = {
			...state,
			productOnAdd: null,
			discount: null,
		}
		const jsonProducts = JSON.stringify(saveState)
		localStorage.setItem('products', jsonProducts)
	}, [state])

	return (
		<Router>
			<HandelAdd.Provider value={[state, dispatch]}>
				<SetBill.Provider value={{ bill, setBill }}>
					<div className='wrap'>
						<Header />

						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/check-cart' element={<CheckCart />} />
							<Route path='/checkout' element={<CheckOut />} />
							<Route path='/Menu' element={<Shop />} />

							<Route
								path='/order-received'
								element={<OrderReceived />}
							/>
							<Route
								path='/Menu/:productId'
								element={<ProductPage />}
							/>
						</Routes>

						<Footer />
					</div>
				</SetBill.Provider>
			</HandelAdd.Provider>
		</Router>
	)
}

export default App
