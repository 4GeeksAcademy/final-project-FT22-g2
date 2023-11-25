import React from "react";
//import bigPaypal from "../../img/bigPaypal";



const Paypal = () => {
    return (
        <>

            <div className="card card-tarjeta-de-credito">
                <div className="card-body card-body-tarjeta-de-credito">
                    <img src={"bigPaypal"} alt="Tarjeta de crédito" className="paypalLogo ms-auto" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="correo electrónico" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña" />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button">Iniciar sesion</button>
                </div>
            </div>


        </>
    )
}

export default Paypal;