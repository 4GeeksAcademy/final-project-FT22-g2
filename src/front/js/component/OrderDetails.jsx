import React from 'react';
import { Link } from 'react-router-dom';
import rigoBaby from '../../img/rigo-baby.jpg'

const OrderDetails = () => {
    return (
        <form action="">
            <h1>Detalles del Pedido</h1>
            <div className="p-3">
                {/* CONTENIDO DE PRODUCTOS CARRITO */}
                <div className="contenedor-carrito-hover">
                    {/* PRODUCT EXAMPLE CARRITO */}
                    <div className="product-example-carrito-hover text-nowrap d-flex m-3 px-3">
                        <div className="product-image m-2">
                            <img src={rigoBaby} alt="example" width="100px" height="100px" className="border" />
                        </div>
                        {/* INFORMACIÓN DE PRODUCTO */}
                        <div className="product-info-carrito-hover m-3 px-3">
                            <h5>Botella de vino</h5>
                            <p>1 unidad</p>
                            {/* BOTON AÑADIR Y QUITAR + PRECIO */}
                            <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
                                <button type="button" className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
                                <label className="label-cantidad-carrito-hover px-2">1</label>
                                <button type="button" className="button-add-remove-carrito-hover add-carrito-hover">+</button>
                                <p className=" px-2 price-carrito-hover" >40.000</p>
                            </div>
                        </div>
                    </div>

                    {/* SUBTOTAL Y BTN IR AL CARRITO */}
                </div>

                <div className="container-price-button-cart">
                    <h4 className="subtotal-carrito-price">Opciones seguras al finalizar la compra</h4>
                    <Link to="/carrito" className="d-flex justify-content-center text-decoration-none">
                        <button type="button" href="#" className="btn-ir-al-carrito">
                            Continuar
                        </button>
                    </Link>
                </div>
            </div>

        </form>
    );
};

export default OrderDetails;
