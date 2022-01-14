export const paths = [
	{
		path: '/checkout',
		label: 'Checkout',
	},
	{
		path: '/check-cart',
		label: 'Cart',
	},
	{
		path: '/Menu',
		label: 'Menu',
	},
	{
		path: '/order-received',
		label: 'Order Complete',
	},
]
export const CheckOutFields = [
	{
		name: 'name',
		label: 'Name *',
		placeholder: '',
		type: 'text',
	},
	{
		name: 'phone',
		label: 'Phone *',
		placeholder: '',
		type: 'text',
	},
	{
		name: 'email',
		label: 'Email *',
		placeholder: '',
		type: 'email',
	},
	{
		name: 'city',
		label: 'Town/City *',
		placeholder: '',
		type: 'text',
	},
	{
		name: 'district',
		label: 'District * ',
		placeholder: '',
		type: 'text',
	},
	{
		name: 'address',
		label: 'Address * ',
		placeholder: '',
		type: 'text',
	},
]
export const getDateFunction = (timestamp) => {
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const date = new Date(timestamp)
	const a = `${
		month[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`
	return a
}
export const COMBO_SIZE_OPTIONS = [
	{
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c566146f7f81ebac91848cd9ea3e2f3e5d9abe4b-70x70.png?w=320&q=40&fit=max&auto=format',
		title: 'Just the Sandwich',
		desc: 'Entree Only',
		value: 0,
		price: 0,
	},
	{
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84349d76c4f2d3cbb58c4a4f1e755638392cebd8-70x70.png?w=320&q=40&fit=max&auto=format',
		title: 'Small',
		desc: 'Small Drink and Small Side Included',
		value: 1,
		price: 1,
	},
	{
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/7f1c948be2a1d41e28a22a1ca550971b850067e6-70x70.png?w=320&q=40&fit=max&auto=format',
		title: 'Medium',
		desc: 'Medium Drink and Medium Side Included',
		value: 2,
		price: 2,
	},
	{
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/6790103b24738c163af76a2cd47225a987a340b3-70x70.png?w=320&q=40&fit=max&auto=format',
		title: 'Large',
		desc: 'Large Drink and Large Side Included',
		value: 3,
		price: 3,
	},
]
export const SIDE_OPTIONS = [
	{
		title: 'Classic Fries',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/e4efe6c9a8325472565c3c9597a5a8339c9ead03-1333x1333.png?w=320&q=40&fit=max&auto=format',
		value: 0,
	},
	{
		title: 'Onion Rings',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/2f1f1c87c082b18cee83d286921162a24dc869bd-1333x1333.png?w=320&q=40&fit=max&auto=format',
		value: 1,
	},
]
export const DRINK_OPTIONS = [
	{
		title: 'Coca-Cola',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c50b5e30f0afae6cea9ccdd8eeea069bed721ee9-1333x1333.png?w=320&q=40&fit=max&auto=format',
		value: 0,
	},
	{
		title: 'Diet Coke',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1a39f6521e810916dfabd7226b1d04c110fc402a-1333x1333.png?w=320&q=40&fit=max&auto=format',
		value: 1,
	},
	{
		title: 'Sprite',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c3cbb54bc67b9b98523f9b335f927831fe28f47b-1333x1333.png?w=320&q=40&fit=max&auto=format',
		value: 2,
	},
	{
		title: 'Fanta Orange',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/5ee5c4e144a4867957bc61d04d4bc8c13723e9b4-418x598.png?w=320&q=40&fit=max&auto=format',
		value: 3,
	},
	{
		title: 'Dr. Pepper',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1a1071e349e2111044de643040886e80f7cecac0-1333x1333.png?w=320&q=40&fit=max&auto=format',
		value: 4,
	},
	{
		title: 'Hi-C Pink Lemonade',
		labelImg:
			'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/4e6d4b82dccbac801bc8a3b8695840ae229fecb3-348x252.png?w=320&q=40&fit=max&auto=format',
		value: 5,
	},
]
export const customerReviews = [
	{
		name: 'Nina Margaret',
		img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-2.jpg',
		star: 4,
		text: 'Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples ',
	},
	{
		name: 'Rose',
		img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-1.jpg',
		star: 5,
		text: 'I would be lost without restaurant. I would like to personally thank you for your outstanding product.',
	},
	{
		name: 'Clara',
		img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-4.jpg',
		star: 3,
		text: "I am completely blown away. I would also like to say thank you to all your staff. It's really wonderful.",
	},
	{
		name: 'John Doe',
		img: 'https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/09/avatar-3.jpg',
		star: 5,
		text: ' I would be lost without restaurant. I would like to personally thank you for your outstanding product.',
	},
]
export const couponArray = [
	{
		code: 'sale5',
		price: -5,
	},
	{
		code: 'freeship',
		price: -10,
	},
]
