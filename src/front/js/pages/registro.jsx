import React, { useState } from 'react';
import "../../styles/registro.css";

const Registro = () => {

    const createUserUrlAPI = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/users";

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        document.getElementById("username");
        document.getElementById("email");
        document.getElementById("password");

        try {
            await createUser(username, email, password);
            console.log('Usuario creado!');

        } catch (error) {
            console.log("error handleSubmit", error);
        }
    }

    const createUser = async (username, email, password) => {

        const user = {
            username,
            email,
            password
        };

        return fetch(createUserUrlAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
            })
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
                                    type="text"
                                    id='password'
                                    placeholder='Contraseña'
                                    className="form-control input-registro"
                                    required
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="container-terminos-y-condiciones">
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