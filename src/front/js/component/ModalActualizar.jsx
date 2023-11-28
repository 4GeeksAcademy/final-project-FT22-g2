import React from 'react';
import copasDeVino from "../../img/copasDeVino.png";

const ModalActualizar = ({ showModal, handleCloseModal }) => {
    return (
       
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Datos actualizados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p></p>
                {/* Agrega la imagen */}
                <img src={copasDeVino} alt="copas-de-vino" className="copasDeVino" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModal}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
      
    );
};


export default ModalActualizar;
