import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShieldHalved, faOtroIcono } from "@fortawesome/free-solid-svg-icons";
import rigoBaby from "../../img/rigo-baby.jpg";
import paymentMethods from "../../img/paymentMethods.png";

const OrderDetails = () => {
  const products = [
    {
      name: "Botella de vino",
      quantity: 1,
      price: "$ 40.000",
    },
    {
      name: "Botella de vino",
      quantity: 3,
      price: "$ 45.000",
    },
  ];

  const titleStyle = {
    marginBottom: 0,
  };

  return (
    <section className="col-lg-7 col-md-8 col-sm-12 container-fluid text-center">
      <div className="container-price-button-cart">
        <div className="d-flex row align-items-center mt-3">
          {/* Botón a la izquierda */}
          <div className="title-regresar-anterior-vista row">
            <Link to="/carrito" type="button" className="button-regresar-anterior-vista col-1"><i className="fa-solid fa-arrow-left"></i></Link>
            <h3 className="col-10">Detalles del Pedido</h3>
          </div>

        </div>


        <div className="p-2">
          {/* CONTENIDO DE PRODUCTOS CARRITO */}
          <div className="contenedor-carrito-hover">
            {/* PRODUCT EXAMPLE CARRITO */}

            {products.map((product) => (
              <div className="product-example-carrito-hover text-nowrap d-flex m-3 px-3">
                <div className="product-image m-3">
                  <img
                    src={rigoBaby}
                    alt="example"
                    width="100px"
                    height="100px"
                    className="border"
                  />
                </div>
                {/* INFORMACIÓN DE PRODUCTO */}
                <div className="product-info-carrito-hover col col-md-6 m-3 px-3">
                  <h5 className="text-start">{product.name}</h5>
                  <p className="text-start text-secondary">{product.quantity} unidad</p>

                  {/* ---- // SUBTOTAL MAS ENVIO Y PRECIO // ---- */}
                  <div className="row">
                    <div className="col-6 text-start">
                      <p><strong>Precio</strong></p>
                      <p><strong>Envío</strong></p>
                    </div>

                    <div className="col-6 text-end">
                      <p className="px-4 mx-4">{product.price}</p>
                      <p className="px-4 mx-4">Gratis</p>
                    </div>
                  </div>
                </div>

              </div>

            ))}

            {/* SUBTOTAL Y BTN IR AL CARRITO */}
          </div>

          <div className="container-price-button-cart">
            <h5 className="subtotal-carrito-price d-flex align-items-center justify-content-center py-3">
              <div className="d-flex pe-1"><FontAwesomeIcon icon={faShieldHalved} /></div>Opciones seguras al finalizar la compra
            </h5>
            <img
              src={paymentMethods}
              alt="example"
              width="auto"
              margin_rigth="10px"
              margin-left="10px"
              height="auto"
              className="border d-flex align-items-center justify-content-center mx-5"
            />

            {/* ---- // PRECIO TOTAL // ---- */}
            <div className="total-precio-metodo-de-pago row mb-3">
              <h5 className="col-6 text-start h4">Total (2 items)</h5>
              <h5 className="col-6 text-end h4">$ 85.000</h5>
            </div>
            <Link
              to="/metodo-de-pago"
              className="d-flex justify-content-center text-decoration-none mb-5"
            >
              <button type="button" href="#" className="btn-ir-al-carrito bg-black text-white">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </div >
    </section >
  );
};

export default OrderDetails;
