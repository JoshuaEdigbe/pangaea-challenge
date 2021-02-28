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
				className="photo"
			/>
			<p className="title">Product Title</p>
			<span className="price">From $40.40</span>
			<button className="custom-button primary-button">Add to Cart</button>
		</div>
	);
};

export default ProductItem;
