import React from "react";
import pagoTarjetaDeCredito from "../../styles/pagoTarjetaDeCredito.css";


const Webpay = () => {
    return(
        <>
        <h1>webpay</h1>

        <div className="card card-tarjeta-de-credito">
            <div className="card-body card-body-tarjeta-de-credito">

                
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
                           
                            />
                        </div>
                    </div>

                </form>

            </div>

        </div>

        </>
    )
}
export default Webpay;