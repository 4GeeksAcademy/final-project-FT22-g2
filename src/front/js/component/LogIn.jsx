import React, { useState } from "react";

import "../../styles/logIn.css";

const LogIn = () => {
    return (
        <>
            <div className="modal fade modal-log-in" tabindex="-1" id="modalLogin" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content modal-content-log-in">
                        <div className="modal-header">
                            <h5 className="modal-title">Acceso</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-login-body mb-3"></div>
                            {/*  input email */}
                            <div className="input-group-login">
                                <div className="input-field pt-4"> <span className="far fa-user p-2"></span> <input type="text" placeholder="correo usuario" className="input-field-login" /> 
                            </div>
                            {/* input contraseña */}
                            <div className="form-group-login py-1 pb-2">
                                <div className="input-field"> <span className="fas fa-lock p-2"></span> <input type="text" placeholder="Contraseña" className="input-field-login" /> </div>
                            </div>
                           {/*  olvide mi contraseña */}
                            <section className="olvide-mi-contraseña"><a href="#"> *Olvidé mi contraseña</a></section>
                        </div>
                        <div>
                            {/*  boton ingresar */}
                            <div className="boton-login col-12 mx-auto m-3">
                                <button type="submit" className="btn btn-secondary data-bs-dismiss w-100 ">Ingresar</button>
                            </div>
                            {/*   boton google */}
                            <div className="boton-login col-12 mx-auto mb-3">
                                <button className="btn btn-danger w-100" type="button" value="Login"> Continúa con <i class="fab fa-google me-2"></i></button>
                            </div>
                        </div>
                        {/* link para registro */}
                        <div className="crear-cuenta-login">
                            <span>
                                <a href="#">crear una cuenta</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div >

        </>

    );
};

export default LogIn;