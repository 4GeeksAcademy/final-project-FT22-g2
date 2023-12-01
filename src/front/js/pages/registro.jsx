import React, { useContext, useEffect, useState } from 'react';
import "../../styles/registro.css";
import { Context } from '../store/appContext.js';
import { useNavigate } from "react-router-dom";

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
                .then(resp => navigate("/"))
            alert('Usuario creado!')

        } catch (error) {
            console.log("error handleSubmit", error);
        }
    }

    return (
        <div className="container-registro">
            <div class="card card-registro">
                <div class="card-body">
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
                            <button className="btn btn-danger w-75" type="button" value="Login" disabled>Continúa con <i class="fab fa-google me-2"></i> (Próximamente)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Registro;