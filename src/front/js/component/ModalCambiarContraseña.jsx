import React from "react";
import "../../styles/cambiarContraseña.css"

const ModalCambiarContraseña = () => {
    return (
        <>
          
            <div className="modal fade" id="modalCambiarContraseña" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCambiarContraseñaLabel">Cambiar contraseña</h5>
                            <button type="button" className="btn-close btn-close-modalCambiarContraseña" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body modal-body-modalCambiarContraseña">
                           
                        <div className="input-field p-4"> <span className="far fa-user p-2"></span> <input type="text" placeholder="contraseña antigua" className="input-field-cambiar-contraseña" /></div>
                        
                        <div className="input-field p-4"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Nueva contraseña" className="input-field-cambiar-contraseña" /></div>

                        <div className="input-field p-4"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Confirmar nueva contraseña" className="input-field-cambiar-contraseña" /></div>
                            
                        </div>
                        <div className="modal-footer modal-footer-modalCambiarContraseña">
                            <button type="button" className="btn btn-secondary btn-modalCambiarContraseña" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-dark btn-modalCambiarContraseña">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ModalCambiarContraseña;