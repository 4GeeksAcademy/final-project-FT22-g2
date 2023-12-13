import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import "../../styles/reset_password.css";

const Reset_password = () => {
     const [password, setPassword] = useState('');

   const handleSubmitContraseña = async (e) => {
        e.preventDefault()


        try {
            const response = await fetch('https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/reset_password', {
                method: 'PUT',
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
    useEffect(() => {
        const alertTimeout = setTimeout(() => {
            showAlerta();
        }, 2000);

        return () => clearTimeout(alertTimeout);
    }, []);

    const showAlerta = () =>{
        Swal.fire({
            title: "Lamentamos los inconvenientes, pero esta opción aún no está disponible",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            },
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/'; // Redirige a la página principal
            }
        });
    };

    return (

        <div classNameName="card reset-password p-5">
            <div className="card-body restaurar-contraseña container-fluid">
            <form className="form-restaurar-contraseña " onSubmit={handleSubmitContraseña}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Usuario</label>
                    <input type="email" className="form-control input-rc" id="emailUsuario" aria-describedby="emailHelp"
                         />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control input-rc" id="NuevaContraseña"
                        value={password}
                        o/* nChange={(e) => setPassword(e.target.value)} */ />
                </div>
                <button type="submit"
                    className="btn btn-dark">Guardar</button>
            </form>

            </div>
        </div>

    )
}




export default Reset_password;