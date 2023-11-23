import React from "react";

import "../../styles/cerrarsesion.css"
import copasDeVino from "../../img/copasDeVino.png";

const ModalCerrarSesion = () => {
    return (
        <>
            <div className="modal fade" id="modalCerrarSesion" tabindex="-1" aria-labelledby="modalCerrarSesion" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Su sesion fue cerrada con éxito</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="copaDeVino">
                                <img src={copasDeVino} alt="copas-de-vino" className="copasDeVino" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ModalCerrarSesion;