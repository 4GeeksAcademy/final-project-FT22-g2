import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductCard from "../component/ProductCard.jsx";
import "../../styles/ProductCard.css";

const Single = () => {
  const { store } = useContext(Context);
  const { name, price, imageUrl, stars } = store.product || {};

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-md-6 col-xs-12 custom-center">
          <ProductCard imageUrl={imageUrl} />
        </div>
        <div className="col-md-6 col-xs-12">
          <div className="mb-4 mx-3 mx-md-5">
            <h2>Nombre de vino</h2>
            <p className="card-text text-start">
              <i className="fas fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
            </p>
            <p className="text-secondary mt-1 mb-5">750cc</p>
            <p className="px-2 price-carrito-hover text-black">
              Precio: 40.000
            </p>
            <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
              <button className="button-add-remove-carrito-hover remove-carrito-hover bg-white mx-3">
                -
              </button>
              <label className="label-cantidad-carrito-hover px-2 mx-3">
                1
              </label>
              <button className="button-add-remove-carrito-hover add-carrito-hover bg-white mx-3">
                +
              </button>
            </div>
            <button className="btn btn-secondary rounded-pill my-2 px-4">
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
        <h3 className="bg-black text-white d-inline-block p-2 rounded rounded-lg">
          Descripción del Producto
        </h3>
        <div className="ps-relative">
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
        <h3 className="bg-black text-white d-inline-block p-2 rounded rounded-lg">
          Reseñas del Producto
        </h3>
        <div className="calificaciones d-flex align-items-center">
          <h2 className="text-left">5</h2>
          <p className="stars ml-2">
            <i className="fas fa-star stars"></i>
            <i className="far fa-star stars"></i>
            <i className="far fa-star stars"></i>
            <i className="far fa-star stars"></i>
            <i className="far fa-star stars"></i>
          </p>
          {/** Condición para mostrar "sin calificaciones" */}
          {typeof stars === "number" && stars === 0 ? (
            <p className="text-black ml-2">68 calificaciones</p>
          ) : null}
        </div>
      </div>

      <div className="comment mt-3 mb-3">
        <div className="stars ml-2">
          <i className="fas fa-star stars"></i>
          <i className="far fa-star stars"></i>
          <i className="far fa-star stars"></i>
          <i className="far fa-star stars"></i>
          <i className="far fa-star stars"></i>
        </div>
        <span className="ml-2">13 Nov. 2023</span>
        <div className="mt-2 mb-2">
          <p className="text-secondary">
            Estaba maravilloso exquisito arte, 5 estrellas.
            <button>
              <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
            </button>
            <button>
              <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
            </button>
          </p>
        </div>
      </div>

      <div className="comment mt-3 mb-3">
        <div className="stars ml-2">
          <i className="fas fa-star stars"></i>
          <i className="far fa-star stars"></i>
          <i className="far fa-star stars"></i>
          <i className="far fa-star stars"></i>
          <i className="far fa-star stars"></i>
        </div>
        <span className="ml-2">13 Nov. 2023</span>
        <div className="mt-2 mb-2">
          <p className="text-secondary">
            Espectacular, PERO.
            <button>
              <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
            </button>
            <button>
              <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;
