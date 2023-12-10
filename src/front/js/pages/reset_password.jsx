import React, { useState } from "react";
import layout from "../layout";

const Reset_password = () => {
    const [password, setPassword] = useState('');

    const handleSubmitContraseña = async (e) => {
        e.preventDefault()


        try {
            const response = await fetch('https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: password })
            });

            if (!response.ok) {
                throw new Error('Error al cambiar la contraseña');
            }

            console.log('Contraseña cambiada con éxito');
        } catch (error) {
            console.error('Error al cambiar la contraseña:', error.message);
        }

    }

    return (

        <div classNameName="container">
            <form className="form-restaurar-contraseña" onSubmit={handleSubmitContraseña}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Usuario</label>
                    <input type="email" className="form-control" id="emailUsuario" aria-describedby="emailHelp"
                        value='email' />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control" id="NuevaContraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}



/* 
esta es la vista https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password para que el usuario ingrese su nueva contraseña y esta se cambie en la api,
 no la pude probar xq el back estaba cerrado, falta generar bien la url con el token.
Los cambios estan es ModalRestaurarContraseña.jsx, rotes.py, flux.js, Reset_password.jsx y en el layout.js que esta la ruta  */

export default Reset_password;