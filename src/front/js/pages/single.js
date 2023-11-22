import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vinoFavoritos from "../../img/vino-add-favorites.png"
import vinoQuitarFavoritos from "../../img/vino-modified 1.png"


import ProductCard from "../component/ProductCard.jsx";
import "../../styles/ProductCard.css";

const Single = () => {
  const { store } = useContext(Context);
  const { name, price, imageUrl, stars } = store.product || {};

  const [favorito, setFavorito] = useState(false);

  const handleAddFavorites = () => {
    setFavorito(!favorito);
  }

  return (
    <div className="container-fluid my-5">
      <div className="row container-productCard d-flex justify-content-center">
        {/* CARD IMG */}
        <div className="col-9 custom-center custom-center-productCard">
          <ProductCard imageUrl={imageUrl} />
        </div>

        <div className="col-3">
          <div className="container-informacion-producto row">

            <div className="informacion-de-producto-single row">
              <h2 className="col-12">Nombre de vino</h2>
              <div className="calificacion-especificacion col-5">
                <p className="card-text text-start col-12 mb-0">
                  <i className="fas fa-star stars"></i>
                  <i className="far fa-star stars"></i>
                  <i className="far fa-star stars"></i>
                  <i className="far fa-star stars"></i>
                  <i className="far fa-star stars"></i>
                </p>
                <p className="text-secondary col-12 mb-5">750cc</p>
              </div>
              <div className="favorito-producto-single col-7 d-flex justify-content-center">
                <button type="button" className="btn-add-favorites-product" onClick={handleAddFavorites}>
                  <img className="add-favorites-img p-0" src={favorito ? vinoQuitarFavoritos : vinoFavoritos} alt="add-favorites" width="60px" height="60px" />
                </button>
              </div>

            </div>

            <div className="section-cantidad-precio-añadir-producto">
              <p className="price-carrito-hover text-black text-start col-12 mt-5 mx-0 h5 mb-1">
                Precio: 40.000
              </p>

              <div className="container-buttons-producto col-12">
                <div className="row">
                  {/* BUTTON CANTIDAD DE PRODUCTO */}
                  <div className="productCard-add-remove-btn d-inline-flex align-items-center justify-content-between col-12 w-75">
                    <button className="button-add-remove-carrito-hover remove-carrito-hover bg-white mx-3"> - </button>
                    <label className="label-cantidad-carrito-hover px-5 mx-2"> 1 </label>
                    <button className="button-add-remove-carrito-hover add-carrito-hover bg-white mx-3"> + </button>
                  </div>
                  {/* BUTTON AGREGAR AL CARRITO */}
                  <button className="btn btn-secondary rounded-pill my-2 col-12 w-75">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="text-center">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">
              {Array.from({ length: stars || 0 }, (_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
            </p>
          </div> */}

      {/* Sección de Descripción del producto */}
      <div className="text-center my-4">
        <h4 className="bg-black text-white d-inline-block p-2 rounded rounded-lg">
          Descripción del Producto
        </h4>
        <div className="ps-relative">
          <textarea
            id="wmd-input"
            name="post-text"
            className="wmd-input s-input bar0 js-post-body-field processed textarea-productCard"
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
      <div className="text-center mt-3 mb-4">
        <h4 className="bg-black text-white d-inline-block p-2 rounded rounded-lg">
          Reseñas del Producto
        </h4>
        <div className="calificaciones-productCard d-flex align-items-center">
          <h2 className="text-left">5</h2>

          <div className="row m-0 w-25 container-calificaciones-reseñas">
            <p className="stars m-0 p-0 col-12">
              <i className="fas fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
            </p>
            <p className="text-black m-0 p-0 col-12">68 calificaciones</p>
          </div>
        </div>
      </div>

      {/** Condición para mostrar "sin calificaciones" */}
      {/* {typeof stars === "number" && stars === 0 ? (
            ) : null} */}

      <div className="comment-productCard mt-3 mb-3">
        <div className="contenedor-stars-comment-product">
          <div className="row">
            <div className="stars ml-2 col-9">
              <i className="fas fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
              <i className="far fa-star stars"></i>
            </div>
            <span className="ml-2 col-3 text-end">13 Nov. 2023</span>
          </div>
        </div>

        <div className="mt-2 mb-2">
          <p className="text-secondary">
            Estaba maravilloso exquisito arte, 5 estrellas.
            <button className="button-calificacion-comment-positiva">
              Es útil <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button className="button-calificacion-comment-negativa">
              <i class="fa-regular fa-thumbs-down"></i>
            </button>
          </p>
        </div>
      </div>

      <div className="comment-productCard mt-3 mb-3">
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
