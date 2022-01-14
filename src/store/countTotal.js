export const countSubTotal = (products) => {
	const result = products
		.reduce((total, item) => total + Number(item.totalPrice), 0)
		.toFixed(2)
	return result
}
export const countPrice = (product) => {
	return (Number(product.unitPrice) * Number(product.quantity)).toFixed(2)
}
