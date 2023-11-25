import React from "react";
import { Link } from "react-router-dom";
import rigoBaby from "../../img/rigo-baby.jpg";
import paymentMethods from "../../img/paymentMethods.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";

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

  // Estilos en línea para el botón "x"
  const closeButtonStyle = {
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    marginRight: '5px',
  };

  return (
    <section className="col-lg-7 col-md-8 col-sm-12 container-fluid text-center">
      <div className="container-price-button-cart">
        <div className="row align-items-center m-auto">
          {/* Botón a la izquierda */}
          <div className="col-auto d-flex pt-1">
            <button className="btn" style={closeButtonStyle}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Título centrado */}
            <div className="col text-center pt-1">
              <h3 className={titleStyle}>Detalles del Pedido</h3>
            </div>
          </div>
        </div>


        <div className="p-3">
          {/* CONTENIDO DE PRODUCTOS CARRITO */}
          <div className="contenedor-carrito-hover">
            {/* PRODUCT EXAMPLE CARRITO */}

            {products.map((product) => (
              <div className="product-example-carrito-hover text-nowrap d-flex m-3 px-3">
                <div className="product-image m-2">
                  <img
                    src={rigoBaby}
                    alt="example"
                    width="100px"
                    height="100px"
                    className="border"
                  />
                </div>
                {/* INFORMACIÓN DE PRODUCTO */}
                <div className="product-info-carrito-hover m-3 px-3">
                  <h5 className="text-start">{product.name}</h5>
                  <p className="text-start">{product.quantity} unidad</p>

                  {/* ---- // SUBTOTAL MAS ENVIO Y PRECIO // ---- */}
                  <div className="row">
                    <div className="col-6 text-start">
                      <p ><strong>Precio</strong></p>
                      <p><strong>Envío</strong></p>
                    </div>

                    <div className="col-6 text-end">
                      <p className="px-5">{product.price}</p>
                      <p>Gratis</p>
                    </div>
                  </div>
                </div>

              </div>

            ))}

            {/* SUBTOTAL Y BTN IR AL CARRITO */}
          </div>

          <div className="container-price-button-cart">
            <h5 className="subtotal-carrito-price d-flex align-items-center justify-content-center">
              <div className="d-flex"><FontAwesomeIcon icon={faShield} /></div>Opciones seguras al finalizar la compra
            </h5>
            <img
              src={paymentMethods}
              alt="example"
              width="auto"
              height="50px"
              className="border d-flex align-items-center justify-content-center mx-3"
            />

            {/* ---- // PRECIO TOTAL // ---- */}
            <div className="total-precio-metodo-de-pago row">
              <h5 className="col-6 text-start h4">Total (2 items)</h5>
              <h5 className="col-6 text-end h4">$ 85.000</h5>
            </div>
            <Link
              to="/carrito"
              className="d-flex justify-content-center text-decoration-none"
            >
              <button type="button" href="#" className="btn-ir-al-carrito">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
