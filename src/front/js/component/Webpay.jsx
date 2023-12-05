import React, { useState } from "react";
import pagoTarjetaDeCredito from "../../styles/pagoTarjetaDeCredito.css";
import webpayLogo from "../../img/webpayLogo.png"
import Direccion from "./Direccion.jsx";
import Swal from 'sweetalert2'

const Webpay = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: ""
    })

    const handleOnClickDefault = (e) => {
        e.preventDefault();

        const numberOnly = /^\d+$/;

        let isValid = true;

        if (state.number === '' || state.name === '' || state.expiry === '' || state.cvc === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos son obligatorios!",
            });
        } else {

            if (!numberOnly.test(state.number)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "El número de tarjeta sólo puede contener dígitos!",
                });
                isValid = false;
            }

            if (state.number.length < 16 || state.number.length > 16) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Número de tarjeta debe tener 16 dígitos!",
                });
                isValid = false;
            }

            if (state.name.length < 1 || state.name.length > 40) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "El nombre no puede ir vacío!",
                });
                isValid = false;
            }

            if (!numberOnly.test(state.expiry)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "La fecha de expiración sólo puede contener dígitos!",
                });
                isValid = false;
            }

            if (state.expiry.length < 4 || state.expiry.length > 4) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Fecha de expiración debe tener 4 dígitos!",
                });
                isValid = false;
            }

            if (!numberOnly.test(state.cvc)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "El CVC sólo puede contener dígitos!",
                });
                isValid = false;
            }

            if (state.cvc.length < 3 || state.cvc.length > 3) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "CVC debe tener 3 dígitos!",
                });
                isValid = false;
            }

            if (isValid) {
                Swal.fire({
                    icon: "success",
                    title: "Los campos se rellenaron correctamente!",
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    window.location.href = process.env.BASENAME + "metodo-de-pago/direccion";
                }, 2000);
            }
        }
    }

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
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
                                maxLength={16}
                                minLength={16}
                                className="form-control"
                                required
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        {/*  nombre tarjeta */}
                        <div className="form-group p-3">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="name-tarjeta"
                                maxLength={40}
                                className="form-control"
                                required
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
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
                                    maxLength={4}
                                    minLength={4}
                                    className="form-control"
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />

                            </div>
                            {/* CVC tarjeta */}
                            <div className="col-md-6">
                                <label htmlFor="cvc">CVC</label>
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvcTarjeta"
                                    maxLength={3}
                                    minLength={3}
                                    className="form-control"
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                        </div>

                        {/* BOTON PARA validar */}
                        <div className="boton-para-cambiarDireccion p-3">
                            <button onClick={handleOnClickDefault} type="submit" className="btn btn-secondary btn-sm">Continuar</button>
                        </div>

                    </form>


                </div>

            </div>

        </>
    )
}
export default Webpay;