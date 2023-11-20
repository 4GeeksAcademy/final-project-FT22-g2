import React from "react";
import PropTypes from "prop-types";
import "../../styles/ProductCard.css";

const ProductCard = ({ imageUrl }) => (
    <div className="card">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
    </div>
);

ProductCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
