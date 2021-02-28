// react libraries
import React from 'react';

// components
import ProductItem from './_partials/ProductItem';

// styles
import './index.scss';

const Products = () => {
	return (
		<div id="products">
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
		</div>
	);
};

export default Products;
