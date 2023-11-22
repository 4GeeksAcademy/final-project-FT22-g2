import React from "react";
import PropTypes from "prop-types";
import "../../styles/ProductCard.css";

const ProductCard = () => (
    <div className="card card-product-card">
        <img className="card-img-top-productCard" src="https://dummyimage.com/200x300/000/fff" alt="Card image cap" />
    </div>
);

ProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
