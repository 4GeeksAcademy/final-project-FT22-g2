import React from 'react';
import bgHero from "../../img/background-hero.jpeg"

const ModalContact = () => {
    return (
        <>
            {/* MODAL */}
            <div className="modal fade" id="ModalContact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body text-dark">
                            <div className="row p-3">
                                <div className="col-4">
                                    <img src={bgHero} alt="example" width="100%" height="100%" className="rounded" />
                                </div>
                                <div className="col-8 container-inputs-contact">
                                    <div className="row">
                                        <h1 className="text-center">Contáctenos:</h1>
                                        <div className="col-6">
                                            <input className="input-form-contact" type="text" placeholder="Nombre" required />
                                        </div>
                                        <div className="col-6">
                                            <input className="input-form-contact" type="text" placeholder="Apellido" required />
                                        </div>
                                    </div>
                                    <input className="input-form-contact" type="email" placeholder="Email" required />
                                    <input className="input-form-contact input-form-contact-number" type="number" placeholder="Teléfono" required />
                                    <textarea className="input-form-contact" name="textareaContact" id="textareaContact" cols="20" rows="4"></textarea>

                                    <button type="button" className="btn-enviar-formulario-contactanos">Enviar</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalContact;