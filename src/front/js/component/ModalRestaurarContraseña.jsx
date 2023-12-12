import React, { useState } from "react";
import "../../styles/modalRestaurarContraseña.css"
import emailjs from '@emailjs/browser'


const RestaurarContraseña = () => {
    const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico

    const service_ID = "service_n8cz62t";
    const template_ID = "contact_form";
    const api_public_key = "kdu6P43r16fPHQoUu";

    const sendMail = async() => {
        try{
            const response = await fetch('https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email }),
            })
            if (!response.ok) {
                throw new Error('Error al obtener el token');          
        }

        const data = await response.json();
        const token = data.token;
        const resetUrl = `https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password/${token}`;


        
        await emailjs
            .send(service_ID, template_ID, { email: email, name: "", access_token: "",resetUrl: resetUrl  }, api_public_key)
                setEmail(''); // Limpia el campo de correo electrónico después del envío
                alert("Tu email fue enviado exitosamente");
            
        }catch(error) {
                console.error(err);
                alert('hubo un error al enviar el correo. Por favor, intenta más tarde');
    }
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