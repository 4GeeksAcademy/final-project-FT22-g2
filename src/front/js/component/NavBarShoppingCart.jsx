import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavBarShoppingCart = () => {
    const { store, actions } = useContext(Context);
    const shoppingCart = store.shoppingCart || [];

    

    return <ul className="navbar-nav">
        {/* ---- / DROPDOWN CARRITO / ---- */}
        <li className="nav-item dropstart">
            <a className="nav-link dropdown text-white" id="navbarDropdown" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-cart-shopping px-3"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-start contenedor-dropdown-menu-carrito-collapse" aria-labelledby="navbarDropdown">
                <form action="">

                    <div className="p-3">
                        {/* CONTENIDO DE PRODUCTOS CARRITO */}
                        <div className="contenedor-carrito-hover">
                            {
                                shoppingCart.map(shoppingCartItem => (
                                    <div className="product-example-carrito-hover text-nowrap d-flex m-3 px-3">
                                        <div className="product-image m-2">
                                            <img src={shoppingCartItem.image} alt="example" width="100px" height="100px" className="border" />
                                        </div>
                                        {/* INFORMACIÓN DE PRODUCTO */}
                                        <div className="product-info-carrito-hover m-3 px-3">
                                            <h5>{shoppingCartItem.nombre}</h5>
                                            <p>{shoppingCartItem.cantidad} unidad</p>
                                            {/* BOTON AÑADIR Y QUITAR + PRECIO */}
                                            <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
                                                {/* <button type="button" className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
                                    <label className="label-cantidad-carrito-hover px-2">1</label>
                                    <button type="button" className="button-add-remove-carrito-hover add-carrito-hover">+</button> */}
                                                <p className=" px-2 price-carrito-hover">${shoppingCartItem.precio}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                            {/* SUBTOTAL Y BTN IR AL CARRITO */}
                            <div className="container-price-button-cart">
                                <h4 className="subtotal-carrito-price">Subtotal: $$$</h4>
                                <Link to="/carrito" className="d-flex justify-content-center text-decoration-none mb-3">
                                    <button type="button" href="#" className="btn-ir-al-carrito">
                                        Ir al carrito
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>

            </ul>
        </li>
    </ul>

}