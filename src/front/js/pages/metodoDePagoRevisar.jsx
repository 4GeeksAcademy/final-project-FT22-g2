import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";
import { MetodoPagoContext } from "../component/ContextPago.jsx";

import PagoTarjetaDeCredito from "../component/PagoTarjetaCredito.jsx"
import Webpay from "../component/Webpay.jsx";
import Paypal from "../component/Paypal.jsx";
import Direccion from "../component/Direccion.jsx";

import "../../styles/metodoDePagoRevisar.css";

const MetodoDePagoRevisar = () => {
    const { seleccionarMetodo, metodoSeleccionado } = useContext(MetodoPagoContext);

    return (

            <div className="container-fluid container-vista-metodo-de-pago">
                {/* TITULO Y BOTÓN PARA REGRESAR A VISTA ANTERIOR */}
                <div className="title-regresar-anterior-vista row">
                    {/* VISTA PREVIA */}
                    <Link to={"/metodo-de-pago"} className="flecha-vista-anterior col-1">
                        <button type="button" className="button-regresar-anterior-vista"><i className="fa-solid fa-arrow-left"></i></button>
                    </Link>
                    <h3 className="col-10">Confirmar compra</h3>
                </div>

                {/* ---- // BARRA PROCESO DE PAGO // ---- */}
                <div className="proceso-de-pago-barra-pago-revisar">
                    <h5 className="texto-barra-proceso-pago">Carro</h5>
                    <h5 className="texto-barra-proceso-pago">Pago</h5>
                    <h5 className="texto-barra-proceso-pago">Revisar</h5>
                </div>
                <div>
                    <h4>Método de Pago Seleccionado:</h4>
                    <p>{metodoSeleccionado}</p>
                    {metodoSeleccionado === "credito" && <PagoTarjetaDeCredito />}
                    {metodoSeleccionado === "debito" && <Webpay />}
                    {/* {metodoSeleccionado === "payPal" && <Paypal />} */}

                </div>
            </div>

    )
}

export default MetodoDePagoRevisar;