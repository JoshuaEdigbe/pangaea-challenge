// react libraries
import React from 'react';

// styles
import './index.scss';

const ProductItem = () => {
	return (
		<div className="product-item">
			<img
				src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png"
				alt=""
			/>
			<p>Product Title</p>

			<button className="custom-button">Add to Cart</button>
		</div>
	);
};

export default ProductItem;
