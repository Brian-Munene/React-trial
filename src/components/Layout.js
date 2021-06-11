import React, { useState, useEffect } from 'react'
import Product from './Product'
import faker from 'faker'

const Layout = (props) => {
	const [input, setInput] = useState('')
	const [inputError, setInputError] = useState(false)
	const [productListDefault, setProductListDefault] = useState()
	const [productList, setProductList] = useState()

	const BarStyling = {
		width: '20rem',
		background: '#F2F1F9',
		border: 'none',
		padding: '0.5rem',
	}

	const fetchData = async () => {
		const products = Array.from({ length: 10 }, () => {
			return faker.commerce.product()
		})
		setProductList(products)
		setProductListDefault(products)
	}

	const validate = (input) => {
		const validInput = new RegExp('[a-zA-Z0-9.-]')
		if (input.trim() === ' ') {
			setInputError(true)
		}
		if (!validInput.test(input)) {
			setInputError(true)
		}
	}

	const updateInput = async (input) => {
		setInputError(false)
		validate(input)
		const filtered = productListDefault.filter((product) => {
			return product.toLowerCase().includes(input.toLowerCase())
		})
		setInput(input)
		setProductList(filtered)
	}

	useEffect(() => {
		fetchData()
	}, [])
	return (
		<>
			<h1>E commerce</h1>
			<input
				style={BarStyling}
				key='random1'
				value={input}
				placeholder={'search product'}
				onChange={(e) => updateInput(e.target.value)}
			/>
			{inputError && <p>Your input is wrong</p>}
			<Product productList={productList} />
		</>
	)
}

export default Layout
