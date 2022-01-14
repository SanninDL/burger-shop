import { countSubTotal, countPrice } from './countTotal'

const initialState = JSON.parse(localStorage.getItem('products')) || {
	products: [],
	productOnAdd: null,
	subTotal: 0,
	discount: null,
	delivery: 10,
	total: 0,
	userInfo: {},
	currentId: 0,
	toast: null,
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			const productsArray = [
				...state.products,
				{ ...action.payload, totalPrice: countPrice(action.payload) },
			]

			return {
				...state,
				products: productsArray,
				productOnAdd: action.payload,
				subTotal: countSubTotal(productsArray),
				currentId: state.currentId + 1,
			}
		case 'update':
			// payload : product
			const updateState = [...state.products]
			const indexUpdate = updateState.findIndex(
				(product) => product.orderId === action.payload.orderId
			)
			updateState[indexUpdate] = {
				...action.payload,
				totalPrice: countPrice(action.payload),
			}

			return {
				...state,
				products: updateState,
				subTotal: countSubTotal(updateState),
			}

		case 'remove':
			//payload : index
			const stateRemove = [...state.products]

			stateRemove.splice(action.payload, 1)

			return {
				...state,
				products: stateRemove,
				subTotal: countSubTotal(stateRemove),
			}
		case 'removeOnAdd':
			return {
				...state,
				productOnAdd: null,
			}
		case 'setTotal':
			return {
				...state,
				total: action.value,
			}
		case 'setDiscount': {
			// payload : {code: ..., price: ...}
			return {
				...state,
				discount: action.payload,
			}
		}
		case 'addToast': {
			//payload : {product: , status: }
			return {
				...state,
				toast: action.payload,
			}
		}
		case 'removeToast': {
			//payload: null
			return {
				...state,
				toast: null,
			}
		}
		case 'addUserInfo':
			return {
				...state,
				userInfo: action.value,
			}
		case 'reset':
			return {
				...state,
				products: [],
				productOnAdd: null,
				subTotal: 0,
				discount: null,
				delivery: 10,
				total: 0,
				cashMethod: '',
				userInfo: {},
			}
		default:
			break
	}
}
export { initialState }
export default reducer
