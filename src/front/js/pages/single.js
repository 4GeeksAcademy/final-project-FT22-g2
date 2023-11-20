// single.js
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import ProductCard from "../component/ProductCard.jsx";

const Single = () => {
  const { store } = useContext(Context);
  const { name, price, imageUrl, stars } = store.product || {}; // Maneja el caso en el que store.product no está definido

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <ProductCard name={name} price={price} imageUrl={imageUrl} />
        </div>
        <div className="col-md-6">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">
            {Array.from({ length: stars || 0 }, (_, index) => (
              <i key={index} className="fa-solid fa-star stars"></i>
            ))}
          </p>
          <button className="btn btn-light rounded-pill my-2">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;
