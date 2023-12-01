import React, { useState } from 'react';
import bgHero from "../../img/background-hero.jpeg"

const ModalContact = () => {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showClosingModal, setShowClosingModal] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
            alert('Todos los campos son obligatorios');
            return;
        }

        setFormSubmitted(true);

        setTimeout(() => {
            setShowClosingModal(true);
        }, 3000);
    }



    return (
        <>
            {/* MODAL */}
            <div className="modal fade" id="ModalContact" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog odal-dialog-centered modal-xl">
                    <div className="modal-content">
                        {/* Botón "X" para cerrar el modal en pantallas pequeñas */}
                        <button
                            type="button"
                            className="btn-close d-lg-none" // Oculta el botón en pantallas grandes y lo muestra en pantallas pequeñas
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <div className="modal-body text-dark">
                            <div className="row p-3">
                                <div className="col-lg-4 col-md-6">
                                    <img src={bgHero} alt="example" width="100%" height="100%" className="rounded" />
                                </div>

                                <form onSubmit={handleSubmit} className='col-lg-8 col-md-6 container-inputs-contact'>
                                    {!formSubmitted ? (
                                        <>
                                            <div className="row">
                                                <h1 className="text-center">Contáctenos:</h1>
                                                <div className="col-6">
                                                    <input name="name" value={formData.name} onChange={handleInputChange} className="input-form-contact" type="text" placeholder="Nombre" required />
                                                </div>
                                                <div className="col-6">
                                                    <input name="lastName" value={formData.lastName} onChange={handleInputChange} className="input-form-contact" type="text" placeholder="Apellido" required />
                                                </div>
                                            </div>
                                            <input name="email" value={formData.email} onChange={handleInputChange} className="input-form-contact" type="email" placeholder="Email" required />
                                            <input name="phone" value={formData.phone} onChange={handleInputChange} className="input-form-contact input-form-contact-number" type="number" placeholder="Teléfono" required />
                                            <textarea value={formData.message} onChange={handleInputChange} className="input-form-contact" name="message" id="textareaContact" cols="20" rows="4"></textarea>
                                            <button type="submit" className="btn-enviar-formulario-contactanos">Enviar</button>
                                        </>

                                    ) : (
                                        <div className='mensaje-enviado-modal-contact'><h4 className='texto-mensaje-enviado-modal'>Mensaje enviado!</h4></div>
                                    )
                                    }
                                </form>
                            </div>
                        </div>
                        {showClosingModal && (
                            <div className="modal-footer">
                                <button
                                    onClick={() => setShowClosingModal(false)}
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                > Cerrar
                                </button>
                            </div>
                        )}
                    </div>
                </div >
            </div >
        </>
    )
}

export default ModalContact;