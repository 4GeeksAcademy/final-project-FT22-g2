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
            }
        } catch (error) {
            console.error('hay un error', error);
        }
    };




    return (
        <>
            <div class="col-sm-4">
                <a class="btn big-login" data-toggle="modal" href="javascript:void(0)" onClick={openLoginModal}><span class="far fa-user p-2"></span>Acceder</a>
            </div>
            {showModal && (
            <div class="modal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Acceso</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeLoginModal}></button>
                        </div>
                        <div class="modal-body mb-3">
                            {/*  input email */}
                            <div className="input-group">
                                <div class="input-field"> <span class="far fa-user p-2"></span> <input type="text" placeholder="correo usuario" required class="" /> </div>
                            </div>
                            {/* input contraseña */}
                            <div class="form-group py-1 pb-2">
                                <div class="input-field"> <span class="fas fa-lock p-2"></span> <input type="text" placeholder="Contraseña" required class="" /> </div>
                            </div>
                        </div>
                        {/*  boton ingresar */}
                        <div className="botones my-4">
                            <div class="col-6 mx-auto mb-3">
                                <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Ingresar</button>
                            </div>
                            {/*   boton google */}
                            <div className="gap-2 col-6 mx-auto mb-3">
                                <button className="btn btn-danger" type="button" value="Login" onClick={submitLogin}><i class="fab fa-google me-2"></i> continua con Google</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
            )}
        </>
        
    )
};


export default LogIn;