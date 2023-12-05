import React, { useContext, useEffect } from "react";
import "../../styles/modalControlEdad.css"
import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";
import { Context } from "../store/appContext";

const ModalControlEdad = () => {

    const { store, actions } = useContext(Context);

    const token = localStorage.getItem("token");

    useEffect(() => {

        if (token == null) {
            // Función para activar el modal después de un cierto tiempo
            function activateModal() {
                var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
                    keyboard: false
                });
                myModal.show();
            }

            // Activar la función después de 1 segundos
            const timer = setTimeout(() => {
                activateModal();
            }, 1000);

            return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta

        } else {
            console.log("")
        }
    }, []);
    // Función para redireccionar al hacer clic en "No"
    const redirectToSenda = () => {
        window.location.href = "https://www.senda.gob.cl/informacion-sobre-drogas/conoce-mas-sobre-las-drogas/alcohol/";
    };

    return (
        <>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-content-control-edad">
                        <div className="modal-header-control-edad">
                            <img src={logoElRinconDelVino} className="img-fluid modal-control" alt="logo" />
                        </div>
                        <div className="modal-body-control-edad">
                            ¿Tienes la edad legal para beber alcohol en tu país?
                        </div>
                        <div className="modal-footer-control-edad">
                            <button type="button" className="btn btn-dark btn-control-edad" data-bs-dismiss="modal">Si</button>
                            <button type="button" className="btn btn-dark btn-control-edad" onClick={redirectToSenda}>No</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ModalControlEdad;