import React from "react";
import "../../styles/modalRestaurarContraseña.css"
import { sendMail } from "../../../services/mail";

const RestaurarContraseña = () => {
    return (
        <>
            <div className="modal fade modal-restaurar-contraseña" tabIndex="-1" id="modalRestaurarContraseña" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-content-restaurar-contraseña">
                        <div className="modal-header">
                            <h5 className="modal-title">Próximamente!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-restaurar-contraseña-body modal-body mb-3">
                            <h4>¡La has perdido para siempre!</h4>
                            <div className="input-group-restaurar-contraseña">
                                <div className="input-field p-4"> <span className="far fa-user p-2"></span> <input id='restaurarContraseña' type="text" placeholder="Email de registro" className="input-field-restaurar-contraseña" /></div>
                            </div>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-dark" onClick={sendMail}>Recuperar contraseña</button> 
                        </div>
                        {/* <fieldset className="fieldset-restaurarContraseña">Revisa tu email y sigue las instrucciones que te enviaremos.</fieldset> */}
                    </div>
                </div>
            </div>

        </>

    );

};

export default RestaurarContraseña;