import React, { useState } from "react";
import "../../styles/logIn.css";




const LogIn = () => {

    const [showModal, setShowModal] = useState(false);

    const openLoginModal = () => {
        setShowModal(true);
    };

    const closeLoginModal = () => {
        setShowModal(false)
    };

    const [invalid, setInvalid] = useState(true);

    const submitLogin = async () => {
        try {
            const response = await fetch('url/api/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: 'JSON.stringify'({
                    email: 'correo@ejemplo.com',
                    password: 'contraseña'
                }),
            });
            if (response.ok) {
                //si la solicitud es exitosa, cerrar el modal
                closeLoginModal();
            } else { //si el correo o la contraseña es invalida
                setInvalid(true);
                setTimeout(() => {//efecto shake
                    setInvalid(false);
                }, 300);
            }
        } catch (error) {
            console.error('hay un error', error);
        }
    };

    return (
        <>
            
                <div class={`modal ${invalid ? 'shake' : ''}`} tabindex="-1" id="modal-login">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Acceso</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeLoginModal}></button>
                            </div>
                            <div class="modal-body mb-3">
                                {/*  input email */}
                                <div className="input-group">
                                    <div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" placeholder="correo usuario" className={`form-control ${invalid ? 'invalid-input' : ''}`} /> </div>
                                </div>
                                {/* input contraseña */}
                                <div class="form-group py-1 pb-2">
                                    <div class="input-field"> <span class="fas fa-lock p-2"></span> <input type="text" placeholder="Contraseña" className={`form-control ${invalid ? 'invalid-input' : ''}`} /> </div>
                                </div>
                            </div>
                            <div>
                                {/*  boton ingresar */}
                                <div class="boton col-12 mx-auto mb-3">
                                    <button type="submit" class={`btn btn-secondary w-100 ${invalid ? 'invalid' : ''}`} data-bs-dismiss="modal">Ingresar</button>
                                </div>
                                {/*   boton google */}
                                <div className="boton col-12 mx-auto mb-3">
                                    <button className="btn btn-danger w-100" type="button" value="Login" onClick={submitLogin}> Continúa con <i class="fab fa-google me-2"></i></button>
                                </div>
                            </div>
                            {/* link para registro */}
                            <div className="crear-cuenta">
                                <span>
                                    <a href="#" onClick={closeLoginModal}>crear una cuenta</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div >
            
        </>

    )
};


export default LogIn;