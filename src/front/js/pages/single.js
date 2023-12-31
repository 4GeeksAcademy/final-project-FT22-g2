import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vinoFavoritos from "../../img/vino-add-favorites.png";
import vinoQuitarFavoritos from "../../img/vino-modified 1.png"
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


import ProductCard from "../component/ProductCard.jsx";
import "../../styles/ProductCard.css";
import { Link } from "react-router-dom";

const Single = () => {
  const { store, actions } = useContext(Context);
  const { nombre = "", precio, image, stars, unitFormat, tipo } = store.product || {};

  const token = localStorage.getItem("token");

  const [favorito, setFavorito] = useState(false);
  const [cantidad, setCantidad] = useState(1)
  const [precioTotal, setPrecioTotal] = useState(precio || 0)

  const handleAddFavorites = () => {
    setFavorito(!favorito);
  }

  const agregarAlCarrito = () => {
    const existingItem = store.shoppingCart.find(item => item.nombre === nombre);

    if (existingItem) {
      // Sumar la cantidad al item existente
      existingItem.cantidad += cantidad;
    } else {
      // Agregar nuevo item con cantidad seteada
      actions.setShoppingCart([...store.shoppingCart, {
        nombre,
        precio,
        image,
        stars,
        unitFormat,
        tipo,
        cantidad
      }]);
    }
  };

  const handleSumar = () => {
    setCantidad(cantidad + 1);
    setPrecioTotal(precio * (cantidad + 1))

    actions.updateShoppingCart(nombre, cantidad + 1);
  }

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      setPrecioTotal(precio * (cantidad - 1))

      actions.updateShoppingCart(nombre, cantidad - 1);
    }
  }

  const handleAlertaProximamente = () => {
    Swal.fire({
      title: "¡Próximamente!",
      icon: "info",
      html: "En un futuro podrás hacerle saber tu humilde opinión a esta persona!",
      showCancelButton: true,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Bien!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

  const { id } = useParams();

  useEffect(() => {
    actions.fetchProduct(id);
  }, [id])

  useEffect(() => {
    if (precio !== undefined) {
      setPrecioTotal(precio * cantidad);
    }
  }, [cantidad, precio]);

  const enCarrito = store.shoppingCart?.some(shoppingCartItem => nombre === shoppingCartItem.nombre)

  return (
    <div className="container my-5">
      <div className="row container-productCard d-flex justify-content-center flex-wrap">
        {/* CARD IMG */}
        <div className="col-12 col-md-4 col-lg-3 col-sm-12 custom-center custom-center-productCard">
          <ProductCard imageUrl={image} />
        </div>

        <div className="col-12 col-md-8 col-lg-9">
          <div className="container-informacion-producto row">

            <div className="informacion-de-producto-single">
              <h2 className="col-9 w-auto mb-3">
                {nombre}
              </h2>
              <div className="calificacion-especificacion col-lg-6 col-md-12" style={{ width: "100%" }}>
                <div className="detalle-especificacion-producto" style={{ display: "flex" }}>
                  <div classNamee="tipo-especificacion-producto" style={{ flex: 1 }}>
                    <p className="card-text text-start col-12 mb-0">
                      <i className="fas fa-star stars"></i>
                      <i className="fas fa-star stars"></i>
                      <i className="fas fa-star stars"></i>
                      <i className="fas fa-star stars"></i>
                      <i className="fas fa-star stars"></i>
                    </p>
                    <p className="text-secondary col-12 mb-1 text-start">{unitFormat}</p>
                  </div>
                  <button type="button" className="btn-add-favorites-product" onClick={handleAddFavorites}>
                    <img className="add-favorites-img p-0 me-3" src={favorito ? vinoQuitarFavoritos : vinoFavoritos} alt="add-favorites" width="60px" height="60px" />
                  </button>

                </div>
                <p className="text-secondary col-12 mb-3 text-start">Tipo: {tipo}</p>
              </div>

            </div>

            <div className="section-cantidad-precio-añadir-producto">
              <p className="price-carrito-hover text-black text-start col-12 mt-5 h5 mb-3 mx-0">
                Precio: ${precioTotal}
              </p>

              <div className="container-buttons-producto col-12">
                <div className="row mx-1">
                  {/* BUTTON CANTIDAD DE PRODUCTO */}
                  <div style={{ maxWidth: "340px", width: "100%" }}>
                    <div className="row" >
                      <button className="button-add-remove-product remove-product-button px-3 col-4" onClick={handleRestar}> - </button>
                      <label className="label-cantidad-carrito-hover px-3 col-4 text-center"> {cantidad} </label>
                      <button className="button-add-remove-product add-product-button px-3 col-4" onClick={handleSumar}> + </button>
                    </div>
                    {/* BUTTON AGREGAR AL CARRITO */}
                    {token == null ? (
                      <>
                        {/* REDIRIGIR A REGISTER SI NO ESTA LOGEADO */}
                        <div className="row">
                          <Link to="/registro">
                            <button disabled={enCarrito} type="button" className="btn btn-secondary rounded-pill my-2 col-12">
                              Agregar al carrito
                            </button>
                          </Link>
                        </div>

                      </>
                    ) : (
                      <>
                        {/* AÑADIR PRODUCTO AL CARRITO SI ESTÁ LOGEADO */}
                        <div className="row">
                          <button disabled={enCarrito} onClick={() => agregarAlCarrito()} type="button" className="btn btn-secondary rounded-pill my-2 col-12">
                            Agregar al carrito
                          </button>
                        </div>


                      </>
                    )}
                  </div>


                </div >
              </div >
            </div >

          </div >
        </div >
      </div >

      {/* Sección de Descripción del producto */}
      <div className="text-center my-4 mx-3 px-0">
        <h4 className="bg-black text-white d-inline-block p-2 rounded rounded-lg">
          Descripción del Producto
        </h4>
        <div className="ps-relative">
          <textarea
            id="wmd-input"
            name="post-text"
            className="wmd-input s-input col-12 bar0 js-post-body-field processed textarea-productCard p-3"
            data-editor-type="wmd"
            data-post-type-id="2"
            cols="92"
            rows="15"
            aria-labelledby="your-answer-header"
            tabIndex="101"
            data-min-length=""
            disabled
            placeholder="- 750cc - 1 unidad"
          ></textarea>
          <div className="grippie bbr-sm" style={{ marginRight: "0px" }}></div>
        </div>
      </div>

      {/* Sección de Reseñas del producto */}
      <div className="text-center mt-3 mb-4">
        <h4 className="bg-black text-white d-inline-block p-2 rounded rounded-lg">
          Reseñas del Producto
        </h4>
        <div className="calificaciones-productCard d-flex align-items-center mx-3">
          <h2 className="text-left">5</h2>

          <div className="col container-calificaciones-reseñas row m-0 w-25">
            <p className="stars m-0 p-0 col-12">
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
            </p>
            <p className="text-black m-0 p-0 col-12">68 calificaciones</p>
          </div>
        </div>
      </div>

      {/** Condición para mostrar "sin calificaciones" */}
      {/* {typeof stars === "number" && stars === 0 ? (
            ) : null} */}

      <div className="comment-productCard">
        <div className="contenedor-stars-comment-product">
          <div className="row">
            <span className="ml-2 col-12 text-end">13 Nov. 2023</span>
            <div className="stars ml-2 col-9 text-start">
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-2 text-start">
          <p className="text-secondary">
            Estaba maravilloso exquisito arte, 5 estrellas.
          </p>
          <button className="button-calificacion-comment-positiva me-3 p-1" onClick={handleAlertaProximamente}>
            Es útil <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button className="button-calificacion-comment-negativa p-1" onClick={handleAlertaProximamente}>
            <i className="fa-regular fa-thumbs-down" ></i>
          </button>
        </div>
      </div>


      <div className="comment-productCard">
        <div className="contenedor-stars-comment-product">
          <div className="row">
            <span className="ml-2 col-12 text-end">13 Nov. 2023</span>
            <div className="stars ml-2 col-9 text-start">
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="fas fa-star stars"></i>
              <i className="far fa-star stars"></i>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-2 text-start">
          <p className="text-secondary">
            Espectacular, PERO.
          </p>
          <button className="button-calificacion-comment-positiva me-3 p-1" onClick={handleAlertaProximamente}>
            Es útil <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button className="button-calificacion-comment-negativa p-1" onClick={handleAlertaProximamente}>
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
        </div>
      </div>

      {/* Media Query para pantallas más pequeñas */}

      <style jsx>{`
             @media only screen and (min-width: 320px) and (min-height: 380px)
    `}</style>

    </div >
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;