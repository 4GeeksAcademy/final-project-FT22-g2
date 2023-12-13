import React, { useState, useRef } from "react";
import "../../styles/modalRestaurarContraseña.css"
import emailjs from '@emailjs/browser'



const RestaurarContraseña  = () => {

    const [formData, setFormData] = useState({ email:''})
    //const [formSubmitted, setFormSubmitted] = useState(false);
    const refForm = useRef();


    const handleEmailChange= (e) => {
        setFormData({
            ...formData,
            email: e.target.value 

        });
    }; 

    

        const handleSubmit = (e) => {
            e.preventDefault();
    

    const service_ID = "service_n8cz62t";
    const template_ID = "contact_form";
    const api_public_key = "kdu6P43r16fPHQoUu";
    var template_params = {email: formData.email }

    emailjs.send
    (service_ID, template_ID, template_params, api_public_key)
    
        .then(response => {
            console.log(response.status, response.text)
        //setFormSubmitted(true)
        })

        .catch(error => {
            console.error(error.text)
        })

    }

   


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

                            <form ref={refForm} onSubmit={handleSubmit}>

                            <div className="input-group-restaurar-contraseña">
                                <div className="input-field p-4"> <span className="far fa-user p-2"></span>
                                    <input id='restaurarContraseña'
                                        type="email" placeholder="Email de registro"
                                        className="input-field-restaurar-contraseña"
                                        value={formData.email}
                                        onChange={handleEmailChange} 
                                        />
                                        </div>
                            </div>
                            <button type="submit" data-bs-dismiss="modal" 
                            className="btn btn-dark" 
                            /* onClick={sendMail} */
                            >Recuperar contraseña</button>
                    </form>

                        </div>
                        <fieldset className="fieldset-restaurarContraseña">Revisa tu email y sigue las instrucciones que te enviaremos.</fieldset>
                    </div>
                </div>
            </div>

        </>

    );

    };


export default RestaurarContraseña;

