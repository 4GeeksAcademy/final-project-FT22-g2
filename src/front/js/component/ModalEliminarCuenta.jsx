import React from "react";
import copasDeVino from "../../img/copasDeVino.png";

import "../../styles/cerrarsesion.css"



const ModalEliminarCuenta = () => {
  return ( 
    <>

      <div className="modal fade" id="modalEliminarCuenta" tabindex="-1" aria-labelledby="modalEliminarCuenta" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cuenta eliminada con éxito</h5>
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
export default ModalEliminarCuenta;