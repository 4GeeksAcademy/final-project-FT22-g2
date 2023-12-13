import React, { useContext, useEffect, useState } from 'react';
import "../../styles/registro.css";
import { Context } from '../store/appContext.js';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Registro = () => {

    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = localStorage.getItem("token");
    const navigate = useNavigate()

    useEffect(() => {
        if (store.user != null) {
            navigate("/")
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await actions.createUser(username, email, password)
            Swal.fire({
                icon: "success",
                title: "Tu usuario se creó correctamente!"
            });

            setTimeout(() => {
                navigate("/")
            }, 2000);

            setTimeout(() => {
                window.location.reload(false)
            }, 2001);

        } catch (error) {
            console.log("error handleSubmit", error);
            Swal.fire({
                icon: "error",
                title: "No se ha podido crear el usuario"
            });
        }
    }

    return (
        <div className="container-registro">
            <div className="card card-registro">
                <div className="card-body">
                    <div className="card-informacion-registro">
                        <h2>Crear cuenta</h2>

                        <form onSubmit={handleSubmit} className='needs-validation' novalidate>
                            <div className="container-inputs-registro">
                                <input
                                    value={username}
                                    type="text"
                                    id='username'
                                    placeholder='Usuario'
                                    className="form-control input-registro"
                                    required
                                    onChange={(e) => setUsername(e.target.value)} />
                                <input
                                    value={email}
                                    type="email"
                                    id='email'
                                    placeholder='Email'
                                    className="form-control input-registro"
                                    required
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input
                                    value={password}
                                    type="password"
                                    id='password'
                                    placeholder='Contraseña'
                                    className="form-control input-registro"
                                    required
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="container-terminos-y-condiciones mx-4 my-3">
                                <input type="checkbox" name="terminos" id="terminosYcondiciones" className='form-check-input' required />
                                <label className='terminosYcondicionesLabel'>Acepto los términos y condiciones</label>
                            </div>

                            <div className="container-btn-registro">
                                <button type='submit' className='btn btn-dark w-75'>Registrarme</button>
                            </div>
                        </form>

                        <div className="container-btn-registro-google">
                            <button className="btn btn-danger w-75" type="button" value="Login" disabled>Continúa con <i className="fab fa-google me-2"></i> (Próximamente)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Registro;