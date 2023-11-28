import React, { useContext } from "react";
import { Link } from "react-router-dom";

import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";
import Swal from 'sweetalert2';

import { MetodoPagoContext } from "../component/ContextPago.jsx";

import PagoTarjetaDeCredito from "../component/PagoTarjetaCredito.jsx"
import Webpay from "../component/Webpay.jsx";
import Paypal from "../component/Paypal.jsx";
import Direccion from "../component/Direccion.jsx";

import "../../styles/metodoDePagoRevisar.css";

const MetodoDePagoRevisar = () => {
    const { seleccionarMetodo, metodoSeleccionado } = useContext(MetodoPagoContext);

    const pagar = () => {
        let timerInterval;
        Swal.fire({
            icon: "success",
            title: "¡Gracias por su compra!",
            imageUrl: logoElRinconDelVino,
            imageWidth: 250,
            imageHeight: 180,
            imageAlt: "Custom image",
            html: "Será redirigido a la página principal en <b></b> milisegundos.",
            timer: 7000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
                window.location.href = "/";
            }
        });
    }




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
                <h4>Método de Pago Seleccionado:</h4>
                <p>{metodoSeleccionado}</p>
                {metodoSeleccionado === "credito" && <PagoTarjetaDeCredito />}
                {metodoSeleccionado === "debito" && <Webpay />}
                {metodoSeleccionado === "payPal" && <Paypal />}

            </div>

            {/* DIRECCION DE ENVIO */}
            <div>
                <h4 className="direccion-de-envio pt-4">Dirección de envío:</h4>
                {/*  COMPONENTE DIRECCION */}
                <Direccion />
            </div>

            {/* BOTON PARA PAGAR */}
            <div className="boton-para-pagar p-3">
                <button type="submit" class="btn btn-dark btn-lg" onClick={pagar}
                >Pagar</button>
            </div>


        </div>

    )
}

export default MetodoDePagoRevisar;