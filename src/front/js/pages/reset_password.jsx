import React, { useState } from "react";
import layout from "../layout";
import { sendMail } from "../../../services/mail";

const Reset_password = () => {
    const [email, setEmail] = useState('');

    const handleSubmitContraseña = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });

            if (!response.ok) {
                throw new Error('Error al enviar el correo de restablecimiento');
            }

            // Lógica adicional si es necesario
            console.log('Correo de restablecimiento enviado con éxito');
        } catch (error) {
            console.error('Error al enviar el correo de restablecimiento:', error.message);
        }

    }

    return (
        <div className="container">
            <form className="form-restaurar-contraseña" onSubmit={handleSubmitContraseña}>
                {/* Input para el correo electrónico */}
                <div className="mb-3">
                    <label htmlFor="emailUsuario" className="form-label">Email Usuario</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailUsuario"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Input para la nueva contraseña (si es necesario) */}
                <div className="mb-3">
                    <label htmlFor="NuevaContraseña" className="form-label">Nueva Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="NuevaContraseña"
                    />
                </div>

                {/* Botón de envío */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}



/* 
esta es la vista https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password para que el usuario ingrese su nueva contraseña y esta se cambie en la api,
 no la pude probar xq el back estaba cerrado, falta generar bien la url con el token.
Los cambios estan es ModalRestaurarContraseña.jsx, rotes.py, flux.js, Reset_password.jsx y en el layout.js que esta la ruta  */

export default Reset_password;