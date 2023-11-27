import React from "react";
import bigPaypal from "../../img/bigPaypal.png";



const Paypal = () => {
    return (
        <>

            <div className="card card-tarjeta-de-credito ms-auto" >
                <div className="card-body card-body-tarjeta-de-credito" style={{ width: '500px' }}>
                    <img src={bigPaypal} alt="Tarjeta de crédito" className="paypalLogo ms-auto"
                        style={{ maxWidth: '100px', height: 'auto', marginRight: 'auto' }} />
                </div>
                <div class="form-group">
                    <label for="input-email" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="input-email-paypal" placeholder="correo electrónico"
                        style={{ width: '80%', margin: 'auto' }} />
                </div>
                <div class="form-gropup">
                    <label for="input-contraseña1" class="form-label">Contraseña</label>
                    <input type="email" class="form-control" id="input-contraseña-paypal" placeholder="Contraseña"
                        style={{ width: '80%', margin: 'auto' }} />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto p-3">
                    <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar sesión</button>
                </div>

                {/*  Modal  */}

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Paypal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Saldrá de nuestra pagina para ser redirigido a la página de Paypal...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => window.location.href = "https://www.paypal.com/cl/home/"}>Entendido</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>



            </>

    )
}
 export default Paypal;