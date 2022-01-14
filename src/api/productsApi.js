import axiosClient from './axiosClient'

export const productApi = {
	getAll: (params) => {
		const url = '/products'
		return axiosClient.get(url, { params })
	},
	getOne: (params) => {
		const url = '/products'
		return axiosClient.get(url, { params })
	},
	getTrending: (params) => {
		const url = '/products'
		return axiosClient.get(url, { params })
	},
	getCategories: (params) => {
		const url = '/categories'
		return axiosClient.get(url, { params })
	},
}
