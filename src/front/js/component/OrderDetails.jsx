import React from "react";
import { Link } from "react-router-dom";
import rigoBaby from "../../img/rigo-baby.jpg";

const OrderDetails = () => {
  const products = [
    {
      name: "Botella de vino",
      quantity: 1,
      price: "40.000",
    },
    {
      name: "Botella de vino pulento",
      quantity: 3,
      price: "45.000",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1 className="text-center pt-4 pb-3">Detalles del Pedido</h1>
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
                  <h5>{product.name}</h5>
                  <p>{product.quantity} unidad</p>
                  {/* BOTON AÑADIR Y QUITAR + PRECIO */}
                  <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="button-add-remove-carrito-hover remove-carrito-hover"
                    >
                      -
                    </button>
                    <label className="label-cantidad-carrito-hover px-2">1</label>
                    <button
                      type="button"
                      className="button-add-remove-carrito-hover add-carrito-hover"
                    >
                      +
                    </button>
                    <p className="px-2 price-carrito-hover">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* SUBTOTAL Y BTN IR AL CARRITO */}
          </div>

          <div className="container-price-button-cart">
            <h4 className="subtotal-carrito-price py-4">
              Opciones seguras al finalizar la compra
            </h4>
            <Link
              to="/metodo-de-pago"
              className="d-flex justify-content-center text-decoration-none"
            >
              <button type="button" href="#" className="btn-ir-al-carrito mb-4 py-2">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
