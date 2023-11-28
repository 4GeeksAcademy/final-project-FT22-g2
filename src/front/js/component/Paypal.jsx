
 import React, { useState } from "react";
import bigPaypal from "../../img/bigPaypal.png";

const Paypal = () => {
    const [isValid, setIsValid] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleButtonClick = () => {
        if (email && password) {
            setIsValid(true);
            const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        } else {
            setIsValid(false);
        }
    };

    return (
        <>
            <div className="card card-tarjeta-de-credito ms-auto">
                <div className="card-body card-body-tarjeta-de-credito" style={{ width: '500px' }}>
                    <img src={bigPaypal} alt="Tarjeta de crédito" className="paypalLogo ms-auto"
                        style={{ maxWidth: '100px', height: 'auto', marginRight: 'auto' }} />
                </div>
                <div className="form-group">
                    <label for="input-email" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className={`form-control ${isValid ? "" : "is-invalid"}`}
                        id="input-email-paypal"
                        placeholder="correo electrónico"
                        style={{ width: '80%', margin: 'auto' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {!isValid && <div className="invalid-feedback">Ingrese un correo electrónico válido</div>}
                </div>
                <div className="form-group">
                    <label for="input-contraseña1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${isValid ? "" : "is-invalid"}`}
                        id="input-contraseña-paypal"
                        placeholder="Contraseña"
                        style={{ width: '80%', margin: 'auto' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!isValid && <div className="invalid-feedback">Ingrese una contraseña válida</div>}
                </div>
                <div className="d-grid gap-2 col-6 mx-auto p-3">
                    <button className="btn btn-primary" type="button" onClick={handleButtonClick}>Iniciar sesión</button>
                </div>

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    <img src={bigPaypal} alt="Tarjeta de crédito" className="paypalLogo ms-auto"
                                        style={{ maxWidth: '100px', height: 'auto', marginRight: 'auto' }} />
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Será redirigido a nuestra página
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => window.location.href = "https://www.paypal.com/cl/home/"}>Entendido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Paypal;
