import { useEffect, useState } from 'react'
import { productApi } from '../api/productsApi'

export default function useGetApi(action) {
	const [result, setResult] = useState([])

	useEffect(() => {
		const getApi = async () => {
			try {
				const response = await productApi[action]()
				setResult(response)
			} catch (e) {
				console.log('error ', e)
			}
		}
		getApi()
	}, [action])
	return result
}
