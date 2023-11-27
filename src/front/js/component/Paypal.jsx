import React from "react";
import bigPaypal from "../../img/bigPaypal.png";



const Paypal = () => {
    return (
        <>

            <div className="card card-tarjeta-de-credito ms-auto" >
                <div className="card-body card-body-tarjeta-de-credito" style={{width:'500px'}}>
                    <img src={bigPaypal} alt="Tarjeta de crédito" className="paypalLogo ms-auto" 
                    style={{ maxWidth: '100px', height: 'auto', marginRight: 'auto' }} />
                </div>
                <div class="form-group">
                    <label for="input-email" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="input-email-paypal" placeholder="correo electrónico" 
                    style={{width:'80%', margin:'auto'}}/>
                </div>
                <div class="form-gropup">
                    <label for="input-contraseña1" class="form-label">Contraseña</label>
                    <input type="email" class="form-control" id="input-contraseña-paypal" placeholder="Contraseña"
                    style={{width:'80%', margin:'auto'}} />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto p-3">
                    <button class="btn btn-primary" type="button">Iniciar sesión</button>
                </div>
            </div>


        </>
    )
}

export default Paypal;