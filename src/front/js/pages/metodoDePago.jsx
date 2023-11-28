import React, { useContext } from "react";

import { MetodoPagoContext } from "../component/ContextPago.jsx";

import mastercardLogo from "../../img/mastercardLogo.png";
import visaLogo from "../../img/visaLogo.png";
import webpayLogo from "../../img/webpayLogo.png";
import paypalLogo from "../../img/paypalLogo.png";

import "../../styles/metodoDePago.css";
import { Link } from "react-router-dom";

const MetodoDePago = () => {

    const { seleccionarMetodo, metodoSeleccionado } = useContext(MetodoPagoContext);

    const handleMetodoPagoSeleccionado = (metodo) => {
        seleccionarMetodo(metodo);

    };

    return (
        <div className=" container-fluid container-vista-metodo-de-pago">

            {/* TITULO Y BOTÓN PARA REGRESAR A VISTA ANTERIOR */}
            <div className="title-regresar-anterior-vista row">
                <Link to="/detalles-pedido" className="text-decoration-none col-1">
                    <button type="button" className="button-regresar-anterior-vista"><i class="fa-solid fa-arrow-left"></i></button>
                </Link>
                <h3 className="col-10">Método de pago</h3>
            </div>

            {/* ---- // BARRA PROCESO DE PAGO // ---- */}
            <div className="proceso-de-pago-barra-pago">
                <h5 className="texto-barra-proceso-pago">Carro</h5>
                <h5 className="texto-barra-proceso-pago">Pago</h5>
                <h5 className="texto-barra-proceso-pago-inactivo">Revisar</h5>
            </div>

            {/* ---- // INFORMACIÓN DE PAGO // ---- */}
            <div className="informacion-opcion-para-pagar">
                <h2 className="opcion-para-pagar">Elige una opción para pagar</h2>
                <h5 className="descripcion-opcion-para-pagar">Podrás ver todas tus compras en la próxima página</h5>
            </div>

            <form>
                {/* ---- // MÉTODOS DE PAGO // ---- */}
                <div className="metodos-de-pago-tarjetas-checkbox ">
                    <div className="container-input-checkbox-metodo-de-pago">
                        <input type="radio" className="checkbox-metodos-de-pago-tarjetas form-check-input" name="metodo-de-pago"
                            id="tarjetaDeCredito" onChange={() => handleMetodoPagoSeleccionado("credito")} />
                        <label className="h4 m-0 form-check-label">Tarjeta de crédito</label>
                        <img src={mastercardLogo} alt="Tarjeta de crédito" className="mastercardLogoMetodoDePago md-3 ms-md-auto " />
                        <img src={visaLogo} alt="Tarjeta de crédito" className="visaLogoMetodoDePago float-md-end mb-3 ms-md-3" />
                    </div>

                    <div className="container-input-checkbox-metodo-de-pago">
                        <input type="radio" className="checkbox-metodos-de-pago-tarjetas form-check-input" name="metodo-de-pago"
                            id="tarjetaDeDebito" onChange={() => handleMetodoPagoSeleccionado("debito")} />
                        <label className="h4 m-0 form-check-label">Tarjeta de débito</label>
                        <img src={webpayLogo} alt="Tarjeta de crédito" className="webpayLogoMetodoDePago ms-auto" />

                    </div>

                    <div className="container-input-checkbox-metodo-de-pago">
                        <input type="radio" className="checkbox-metodos-de-pago-tarjetas form-check-input" name="metodo-de-pago"
                            id="pagoConPaypal" onChange={() => handleMetodoPagoSeleccionado("payPal")} />
                        <label className="h4 m-0 form-check-labels">Pago con Paypal</label>
                        <img src={paypalLogo} alt="Tarjeta de crédito" className="paypalLogoMetodoDePago ms-auto" />
                    </div>
                </div>

                {/* ---- // SUBTOTAL MAS ENVIO Y PRECIO // ---- */}
                <div className="subtotal-envio-precio-metodo-de-pago row">
                    <div className="lado-izquierdo-precio-metodo-de-pago col-6 text-start">
                        <h5>Subtotal</h5>
                        <h5>Envío</h5>
                    </div>

                    <div className="lado-derecho-precio-metodo-de-pago col-6 text-end">
                        <h5>CLP 80.000</h5>
                        <h5>Gratis</h5>
                    </div>
                </div>

                {/* ---- // PRECIO TOTAL // ---- */}
                <div className="total-precio-metodo-de-pago row">
                    <h5 className="col-6 text-start h4">Total (2 items)</h5>
                    <h5 className="col-6 text-end h4">$ 80.000</h5>
                </div>

                {/* ---- // BOTÓN CONTINUAR SIGUIENTE VISTA // ---- */}
                <div className="container-button-continuar-metodo-de-pago">
                    <Link to={"/metodo-de-pago/" + metodoSeleccionado} className="btn btn-dark button-continuar-metodo-de-pago">
                        Continuar
                    </Link>
                </div>

            </form>


        </div>
    )
}

export default MetodoDePago;