import React, { useState } from "react";
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

import pagoTarjetaDeCredito from "../../styles/pagoTarjetaDeCredito.css";

const TarjetaDeCredito = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

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
                            maxLength="16"
                            className="form-control"
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
                            maxLength="40"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    {/* fecha de expiracion tarjeta */}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Fecha de expiración</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiryTarjeta"
                                maxLength="4"
                                className="form-control"
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
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>

                </form>

            </div>

        </div>





    )
}
export default TarjetaDeCredito;