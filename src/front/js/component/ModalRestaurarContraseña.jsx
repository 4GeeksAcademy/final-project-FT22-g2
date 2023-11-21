import React from "react";

const RestaurarContraseña = () => {
    return (
        <>
            <div className="modal fade modal-restaurar-contraseña" tabindex="-1" id="modalRestaurarContraaseña" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content modal-content-restaurar-contraseña">
                        <div className="modal-header">
                            <h5 className="modal-title">Restaurar contraseña</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                        </div>
                        <div className="modal-restaurar-contraseña-body mb-3">
                            <div className="input-group-restaurar-contraseña">
                                <div className="input-field pt-4"> <span className="far fa-user p-2"></span> <input type="text" placeholder="correo usuario" className="input-field-restaurar-contraseña" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );

};

export default RestaurarContraseña;