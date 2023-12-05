import React, { useState } from "react";
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

import pagoTarjetaDeCredito from "../../styles/pagoTarjetaDeCredito.css";
import { Link } from "react-router-dom";

const TarjetaDeCredito = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleOnClickDefault = (e) => {
        e.preventDefault();

        let isValid = true;

        if (state.number === '' || state.name === '' || state.expiry === '' || state.cvc === '') {
            alert("Todos los campos son obligatorios");
        } else {

            if (state.number.length < 16 || state.number.length > 16) {
                alert('Número de tarjeta debe tener 16 dígitos');
                isValid = false;
            }

            if (state.name.length < 1 || state.name.length > 40) {
                alert('El nombre no puede ir vacío');
                isValid = false;
            }

            if (state.expiry.length < 4 || state.expiry.length > 4) {
                alert('Fecha de expiración debe tener 4 dígitos');
                isValid = false;
            }

            if (state.cvc.length < 3 || state.cvc.length > 3) {
                alert('CVC debe tener 3 dígitos');
                isValid = false;
            }

            if (isValid) {
                alert("Los campos se rellenaron correctamente");
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

    // const handleInputChangeNumbers = (e) => {
    //     setState({
    //         ...state,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
    }

    return (
        <div className="card card-tarjeta-de-credito">
            <div className="card-body card-body-tarjeta-de-credito">

                < Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form>
                    {/* numero de tarjeta */}
                    <div className="form-group">
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
                    <div className="form-group">
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
                        <div className="form-group col-md-6">
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
                    <div className="boton-actualizar-cambiarDireccion p-3">
                        <Link to="metodo-de-pago/direccion">
                            <button type="submit" className="btn btn-secondary btn-sm" onClick={handleOnClickDefault}>Continuar</button>
                        </Link>
                    </div>

                </form>

            </div>

        </div>


    )
}
export default TarjetaDeCredito;