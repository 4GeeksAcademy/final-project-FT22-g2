import React from "react";
import "../../styles/metodoDePago.css"

const MetodoDePago = () => {
    return (
        <div className="container-vista-metodo-de-pago">

            {/* TITULO Y BOTÓN PARA REGRESAR A VISTA ANTERIOR */}
            <div className="title-regresar-anterior-vista row">
                <button type="button" className="button-regresar-anterior-vista col-1"><i class="fa-solid fa-arrow-left"></i></button>
                {/* ESTO LINKEARLO A LA VISTA PREVIA */}
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
                        <input type="radio" className="checkbox-metodos-de-pago-tarjetas form-check-input" name="metodo-de-pago" id="tarjetaDeCredito" />
                        <label className="h4 m-0 form-check-label">Tarjeta de crédito</label>
                    </div>

                    <div className="container-input-checkbox-metodo-de-pago">
                        <input type="radio" className="checkbox-metodos-de-pago-tarjetas form-check-input" name="metodo-de-pago" id="tarjetaDeDebito" />
                        <label className="h4 m-0 form-check-label">Tarjeta de débito</label>
                    </div>

                    <div className="container-input-checkbox-metodo-de-pago">
                        <input type="radio" className="checkbox-metodos-de-pago-tarjetas form-check-input" name="metodo-de-pago" id="pagoConPaypal" />
                        <label className="h4 m-0 form-check-labels">Pago con Paypal</label>
                    </div>
                </div>

                {/* ---- // SUBTOTAL MAS ENVIO PRECIO // ---- */}
                <div className="subtotal-envio-precio-metodo-de-pago">
                    <div className="lado-izquierdo-precio-metodo-de-pago">
                        <h5>Subtotal</h5>
                        <h5>Envío</h5>
                    </div>

                    <div className="lado-derecho-precio-metodo-de-pago">
                        <h5>CLP 80.000</h5>
                        <h5>Gratis</h5>
                    </div>
                </div>

                {/* ---- // PRECIO TOTAL // ---- */}
                <div className="total-precio-metodo-de-pago">
                    <h5>Total (2 items)</h5>
                    <h5>$ 80.000</h5>
                </div>

                {/* ---- // BOTÓN CONTINUAR SIGUIENTE VISTA // ---- */}
                <div className="button-continuar-metodo-de-pago">
                    <button className="btn btn-dark">Continue</button>
                </div>

            </form>


        </div>
    )
}

export default MetodoDePago;