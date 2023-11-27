import React, { useContext } from "react";

import { MetodoPagoContext } from "../component/ContextPago.jsx";
import PagoTarjetaDeCredito from "../component/PagoTarjetaCredito.jsx"
import Webpay from "../component/Webpay.jsx";
import Paypal from "../component/Paypal.jsx";

import Direccion from "../component/Direccion.jsx";

import "../../styles/metodoDePagoRevisar.css";
import { Link } from "react-router-dom";

const MetodoDePagoRevisar = () => {
    const { seleccionarMetodo, metodoSeleccionado } = useContext(MetodoPagoContext);



    return (

        <div className="container-fluid container-vista-metodo-de-pago">
            {/* TITULO Y BOTÓN PARA REGRESAR A VISTA ANTERIOR */}
            <div className="title-regresar-anterior-vista row">
                {/* VISTA PREVIA */}
                <Link to={"/metodo-de-pago"} className="flecha-vista-anterior col-1">
                    <button type="button" className="button-regresar-anterior-vista"><i class="fa-solid fa-arrow-left"></i></button>
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
                <h4>Metodo de Pago Seleccionado:</h4>
                <p>{metodoSeleccionado}</p>
                {metodoSeleccionado === "credito" && <PagoTarjetaDeCredito />}
                {metodoSeleccionado === "debito" && <Webpay />}
                {metodoSeleccionado === "payPal" && <Paypal />}

            </div>

            {/* DIRECCION DE ENVIO */}
            <div>
                <h4 className="direccion-de-envio pt-4">Direccion de envio:</h4>
                {/*  COMPONENTE DIRECCION */}
                <Direccion />
            </div>

            {/* BOTON PARA PAGAR */}
            <div className="boton-para-pagar p-3">
                <button type="button" class="btn btn-dark btn-lg">Pagar</button>

            </div>


        </div>

    )
}
export default MetodoDePagoRevisar;