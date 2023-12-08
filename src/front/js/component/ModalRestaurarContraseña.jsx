import React, { useState } from "react";
import "../../styles/modalRestaurarContraseña.css"
//import { sendMail } from "../../../services/mail"
import emailjs from '@emailjs/browser'


const RestaurarContraseña = () => {
    const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico

    const service_ID = "service_n8cz62t";
    const template_ID = "contact_form";
    const api_public_key = 'cRqwKwjjvhCImx3XZ';

    const sendMail = () => {
        
        emailjs
            .send(service_ID, template_ID, api_public_key, { mail: email })
            .then((res) => {
                setEmail(''); // Limpia el campo de correo electrónico después del envío
                console.log(res);
                alert("Tu email fue enviado exitosamente");
            })
            .catch((err) => {
                console.error(err);
                alert('hubo un error al enviar el correo. Por favor, intenta más tarde');
    })
};
    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Actualiza el estado con el valor del correo electrónico
    };



    return (
        <>
            <div className="modal fade modal-restaurar-contraseña" tabIndex="-1" id="modalRestaurarContraseña" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-content-restaurar-contraseña">
                        <div className="modal-header">
                            <h5 className="modal-title">Restaurar Contraseña</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-restaurar-contraseña-body modal-body mb-3">

                            <div className="input-group-restaurar-contraseña">
                                <div className="input-field p-4"> <span className="far fa-user p-2"></span>
                                    <input id='restaurarContraseña'
                                        type="text" placeholder="Email de registro"
                                        className="input-field-restaurar-contraseña"
                                        value={email}
                                        onChange={handleEmailChange} />
                                        </div>
                            </div>
                            <button type="button" data-bs-dismiss="modal" 
                            className="btn btn-dark" 
                            onClick={sendMail}>Recuperar contraseña</button>
                        </div>
                        <fieldset className="fieldset-restaurarContraseña">Revisa tu email y sigue las instrucciones que te enviaremos.</fieldset>
                    </div>
                </div>
            </div>

        </>

    );

    };

export default RestaurarContraseña;