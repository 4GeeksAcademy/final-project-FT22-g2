import React, { useState, useEffect } from "react";
import usuarioFoto from "../../img/usuarioFoto.png";
import Direccion from "../component/Direccion.jsx";
import ModalActualizar from "../component/ModalActualizar.jsx"; // Ajusta la ruta si ModalActualizar.jsx está en la carpeta components

import "../../styles/cambiarDireccion.css";

const CambiarDireccion = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleActualizar = (e) => {
        e.preventDefault();
        // Agrega aquí la lógica para actualizar los datos

        // Muestra el modal
        handleShowModal();

        // Cierra el modal después de 2000 milisegundos (2 segundos)
        setTimeout(() => {
            handleCloseModal();
        }, 2000);
    };

    return (
        <>
            <div className="container-formulario-cambiarDireccion">
                <form className="row needs-validation" novalidate>
                    {/*  foto usuario */}
                    <div className="user-pic">
                        <img src={usuarioFoto} alt="usuario foto" className="usuarioFoto" />
                    </div>
                    {/* nombre usuario */}
                    <div className="user-name text-center pb-3">
                        <h2 className="name">Nombre de usuario</h2>
                    </div>
                    {/* COMPONENTE DIRECCION*/}
                    <Direccion />
                    {/* boton actualizar */}
                    <div class="d-grid gap-2 col-6 mx-auto mb-3 boton-actualizar-cambiarDireccion">
                        <button class="btn btn-dark w-100" type="submit">Actualizar</button>
                    </div>
                </form>

                {/* ModalActualizar */}
                <ModalActualizar showModal={showModal} handleCloseModal={handleCloseModal} />
            </div>
        </>
    );
}

export default CambiarDireccion;
