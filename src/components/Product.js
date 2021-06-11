import React from 'react'

const Product = ({ productList = [] }) => {
	return (
		<>
			{productList.map((data, index) => {
				if (data) {
					return (
						<div key={index}>
							<h3>{data}</h3>
						</div>
					)
				}
				return null
			})}
		</>
	)
}
export default Product
