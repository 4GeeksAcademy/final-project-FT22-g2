import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import ProductCard from "../component/ProductCard.jsx";

const Single = () => {
  const { store } = useContext(Context);
  const { name, price, imageUrl, stars } = store.product || {};

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 custom-center">
          <ProductCard name={name} price={price} imageUrl={imageUrl} />
        </div>
        <div className="col-md-6">
          <div className="text-center my-4">
            <h2>Nombre de vino</h2>
            <p className="card-text">
              <i class="fas fa-star stars"></i>
              <i class="far fa-star stars"></i>
              <i class="far fa-star stars"></i>
              <i class="far fa-star stars"></i>
              <i class="far fa-star stars"></i>
            </p>
            <p className="text-black">750cc</p>
            <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
              <button className="button-add-remove-carrito-hover remove-carrito-hover bg-white">
                -
              </button>
              <label className="label-cantidad-carrito-hover px-2">1</label>
              <button className="button-add-remove-carrito-hover add-carrito-hover bg-white">
                +
              </button>
              <p className="px-2 price-carrito-hover">40.000</p>
            </div>
            <button className="btn btn-light rounded-pill my-2">
              Agregar al carrito
            </button>
          </div>
          <div className="text-center">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">
              {Array.from({ length: stars || 0 }, (_, index) => (
                <i key={index} className="fas fa-star stars"></i>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Descripción del producto */}
      <div className="text-center my-4">
        <h3 className="bg-black text-white d-inline-block p-2">
          Descripción del Producto
        </h3>
        <div class="ps-relative">
          <textarea
            id="wmd-input"
            name="post-text"
            className="wmd-input s-input bar0 js-post-body-field processed"
            data-editor-type="wmd"
            data-post-type-id="2"
            cols="92"
            rows="15"
            aria-labelledby="your-answer-header"
            tabIndex="101"
            data-min-length=""
          ></textarea>
          <div className="grippie bbr-sm" style={{ marginRight: "0px" }}></div>
        </div>
      </div>

      {/* Sección de Reseñas del producto */}
      <div className="text-center my-4">
        <h3 className="bg-black text-white d-inline-block p-2">
          Reseñas del Producto
        </h3>
        <div className="calificaciones d-flex">
          <h1 className="text-left">5</h1>
          <p class="stars">
            <i class="fas fa-star stars"></i>
            <i class="far fa-star stars"></i>
            <i class="far fa-star stars"></i>
            <i class="far fa-star stars"></i>
            <i class="far fa-star stars"></i>
          </p>
          <p className="text-black">sin calificaciones</p>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;
