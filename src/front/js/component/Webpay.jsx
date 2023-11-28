import React from "react";
import pagoTarjetaDeCredito from "../../styles/pagoTarjetaDeCredito.css";
import webpayLogo from "../../img/webpayLogo.png"


const Webpay = () => {
    
    
    return (
        <>

            <div className="card card-tarjeta-de-credito">
                <div className="card-body card-body-tarjeta-de-credito">
                    <img src={webpayLogo} alt="Tarjeta de crédito" className="webpayLogo ms-auto"
                        style={{ maxWidth: '150px', height: 'auto', marginRight: 'auto', paddingBottom: '15px' }} />


                    <form>

                        {/* Banco */}
                        <div className="form-group p-3">
                            <select class="form-select" aria-label="Default select example">
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
                      <div className="boton-para-pagar p-3">
                            <button type="submit" class="btn btn-secondary btn-lg" >Validar tarjeta</button>

                        </div>

                    </form>
                   
                </div>

            </div>

        </>
    )
}
export default Webpay;