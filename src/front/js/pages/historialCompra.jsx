import React from "react";
import rigoBaby from "../../img/rigo-baby.jpg"

import "../../styles/historialCompra.css";
import { Link } from "react-router-dom";

const HistorialCompra = () => {
    return (
        <div className="container-historial-compra">
            <form className="container-input-search-historial-compra">
                <input className="input-search-historial-compra" type="search" placeholder="Buscar entre mis compras" />
            </form>
            <div className="container-contenido-historial-compra">
                {/* ---- // HISTORIAL DE PRODUCTOS // ---- */}
                <div className="producto-historial-compra row text-center">
                    <div className="img-producto-historial-compra col-2">
                        <img src={rigoBaby} alt="example" width="100px" height="100px" />
                    </div>

                    {/* ---- Fecha de entrega ---- */}
                    <div className="estado-envio-producto-historial-compra col-2 text-start">
                        <h5 className="estado-de-producto">Enviado</h5>
                        <h5>Entregado el 23/11/23</h5>
                        <h5 className="unidades-producto-historial">1 unidad</h5>
                    </div>

                    {/* ---- Precio total ---- */}
                    <div className="precio-total-producto-historial-compra col-2">
                        <h5>Total</h5>
                        <h5 className="pt-2">$$$</h5>
                    </div>

                    {/* ---- Calificación ---- */}
                    <div className="calificacion-producto-historial-compra col-2">
                        <h5>Calificación del producto:</h5>
                        <p className="card-text text-align-center pt-1">
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-solid fa-star stars"></i>
                            <i className="fa-regular fa-star stars"></i>
                        </p>
                    </div>

                    {/* ---- Fecha de compra ---- */}
                    <div className="fecha-producto-historial-compra col-2">
                        <h5>Comprado el:</h5>
                        <h5 className="pt-2">21/11/23</h5>
                    </div>

                    {/* ---- Ver el pedido (En caso de que sea más de 1 objeto) ---- */}
                    <div className="col-2">
                        <button className="btn-ver-pedido-historial" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-historial-compra" aria-expanded="false" aria-controls="collapseExample">
                            Ver pedido
                        </button>
                    </div>

                    {/* ---- // COLLAPSE BOTON VER PEDIDO // ---- */}
                    <div className="collapse mt-4" id="collapse-historial-compra">

                        {/* ---- // PRODUCTO 1 EJEMPLO COLLAPSE // ---- */}
                        <div className="card card-body body-collapse-historial-compra">
                            <div className="producto-historial-compra row text-center">
                                <div className="img-producto-historial-compra col-2">
                                    <img src={rigoBaby} alt="example" width="100px" height="100px" />
                                </div>

                                {/* ---- Información del producto ---- */}
                                <div className="estado-envio-producto-historial-compra col-2 text-start">
                                    <h4>Vino tinto</h4>
                                    <h5 className="unidades-producto-historial">Vino 750cc 1 unidad</h5>
                                </div>

                                <div className="precio-total-producto-historial-compra col-2">
                                    <h5>Precio</h5>
                                    <h5 className="pt-2">$$$</h5>
                                </div>

                                <div className="calificacion-producto-historial-compra col-2">
                                    <h5>Calificación del producto:</h5>
                                    <p className="card-text text-align-center pt-1">
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-regular fa-star stars"></i>
                                    </p>
                                </div>

                                <div className="fecha-producto-historial-compra col-2">
                                    <h5>Comprado el:</h5>
                                    <h5 className="pt-2">21/11/23</h5>
                                </div>

                                <div className="container-ver-pedido-historial-compra col-2">
                                    <Link to="/producto">
                                        <button className="btn-volver-a-comprar-historial" type="button">
                                            Volver a comprar
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ---- // PRODUCTO 2 EJEMPLO COLLAPSE // ---- */}
                        <div className="card card-body body-collapse-historial-compra">

                            <div className="producto-historial-compra row text-center">
                                <div className="img-producto-historial-compra col-2">
                                    <img src={rigoBaby} alt="example" width="100px" height="100px" />
                                </div>

                                {/* ---- Información del producto ---- */}
                                <div className="estado-envio-producto-historial-compra col-2 text-start">
                                    <h4>Vino blanco</h4>
                                    <h5 className="unidades-producto-historial">Vino 750cc 1 unidad</h5>
                                </div>

                                <div className="precio-total-producto-historial-compra col-2">
                                    <h5>Precio</h5>
                                    <h5 className="pt-2">$$$</h5>
                                </div>

                                <div className="calificacion-producto-historial-compra col-2">
                                    <h5>Calificación del producto:</h5>
                                    <p className="card-text text-align-center pt-1">
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-regular fa-star stars"></i>
                                        <i className="fa-regular fa-star stars"></i>
                                        <i className="fa-regular fa-star stars"></i>
                                    </p>
                                </div>

                                <div className="fecha-producto-historial-compra col-2">
                                    <h5>Comprado el:</h5>
                                    <h5 className="pt-2">21/11/23</h5>
                                </div>

                                <div className="container-ver-pedido-historial-compra col-2">
                                    <Link to="/producto">
                                        <button className="btn-volver-a-comprar-historial" type="button">
                                            Volver a comprar
                                        </button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HistorialCompra