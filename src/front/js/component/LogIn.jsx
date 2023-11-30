import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/logIn.css";

const LogIn = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    console.log(token)

    const handleLogin = (e) => {
        e.preventDefault()

        actions.login(email, password)
            .then((res) => { navigate("/") })
        setTimeout(() => {
            alert("Has accedido correctamente!")
            window.location.reload(false)
        }, 4000);
    };

    return (
        <>
            <div className="modal fade modal-log-in" tabindex="-1" id="modalLogin" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content modal-content-log-in">
                        <div className="modal-header">
                            <h5 className="modal-title">Acceso</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-login-body mb-3"></div>

                        <form onSubmit={handleLogin}>
                            {/*  input email */}
                            <div className="input-group-login">
                                <div className="input-field pt-4">
                                    <span className="far fa-user p-2"></span>
                                    <input value={email}
                                        id="email"
                                        type="text"
                                        placeholder="Correo usuario"
                                        className="input-field-login"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                {/* input contraseña */}
                                <div className="form-group-login py-1 pb-2">
                                    <div className="input-field">
                                        <span className="fas fa-lock p-2"></span>
                                        <input value={password}
                                            id="password"
                                            type="text"
                                            placeholder="Contraseña"
                                            className="input-field-login"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/*  olvide mi contraseña */}
                                <button className="olvide-mi-contraseña" data-bs-toggle="modal" data-bs-target="#modalRestaurarContraseña" data-bs-dismiss="modal" >¿Olvidaste tu contraseña?</button>
                            </div>

                            {/*  boton ingresar */}
                            <div className="boton-login col-12 mx-auto m-3" data-bs-dismiss="modal">
                                <button type="submit" className="btn btn-dark data-bs-dismiss w-100">Ingresar</button>
                            </div>
                        </form>

                        <div>
                            {/*   boton google */}
                            <div className="boton-login col-12 mx-auto mb-3">
                                <button className="btn btn-danger w-100" type="button" value="Login" disabled> (Próximamente) Continúa con <i className="fab fa-google me-2"></i></button>
                            </div>
                        </div>
                        {/* link para registro */}
                        <div className="crear-cuenta-login" data-bs-dismiss="modal">
                            <span>
                                <Link to="/registro" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Crear una cuenta
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div >

        </>

    );
};

export default LogIn;