import React from "react";
import pagoTarjetaDeCredito from "../../styles/pagoTarjetaDeCredito.css";
import webpayLogo from "../../img/webpayLogo.png"
import Direccion from "./Direccion.jsx";


const Webpay = () => {

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
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
                window.location.href = "/";
            }
        });
    }

    return (
        <>

            <div className="card card-tarjeta-de-credito">
                <div className="card-body card-body-tarjeta-de-credito">
                    <img src={webpayLogo} alt="Tarjeta de crédito" className="webpayLogo ms-auto"
                        style={{ maxWidth: '150px', height: 'auto', marginRight: 'auto', paddingBottom: '15px' }} />


                    <form>

                        {/* Banco */}
                        <div className="form-group p-3">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Banco</option>
                                <option value="1">Banco de Chile</option>
                                <option value="2">Banco Falabella</option>
                                <option value="3">Banco BCI</option>
                                <option value="3">Banco ITAÚ</option>
                                <option value="3">Banco Ripley</option>
                                <option value="3">Banco Estado</option>
                            </select>
                        </div>
                        {/* numero de tarjeta */}
                        <div className="form-group p-3">
                            <label htmlFor="number">Número de la tarjeta</label>
                            <input
                                type="text"
                                name="number"
                                id="number-tarjeta"
                                maxLength="16"
                                className="form-control"
                                required
                            />
                        </div>
                        {/*  nombre tarjeta */}
                        <div className="form-group p-3">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="name-tarjeta"
                                maxLength="40"
                                className="form-control"
                                required
                            />
                        </div>
                        {/* fecha de expiracion tarjeta */}
                        <div className="form row">
                            <div className="form-group col-md-6">
                                <label htmlFor="expiry">Fecha de expiración</label>
                                <input
                                    type="text"
                                    name="expiry"
                                    id="expiryTarjeta"
                                    maxLength="4"
                                    className="form-control"
                                    required
                                />

                            </div>
                            {/* CVC tarjeta */}
                            <div className="col-md-6">
                                <label htmlFor="cvc">CVC</label>
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvcTarjeta"
                                    maxLength="4"
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        {/* BOTON PARA validar */}
                        <div className="boton-para-cambiarDireccion p-3">
                            <button onClick={pagar} type="submit" className="btn btn-secondary btn-sm" >Validar tarjeta</button>
                        </div>

                    </form>


                </div>

            </div>

        </>
    )
}
export default Webpay;