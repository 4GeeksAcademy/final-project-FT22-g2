import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ name, price, imageUrl }) => (
    <div className="card" style={{ width: "18rem", borderRadius: "15px" }}>
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h5>Precio: {price}</h5>
            <button className="btn btn-light rounded-pill">
                Agregar al carrito
            </button>
        </div>
    </div>
);

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
