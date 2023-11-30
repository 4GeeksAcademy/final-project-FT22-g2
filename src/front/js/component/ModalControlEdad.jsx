import React, { useContext, useEffect } from "react";
import "../../styles/modalControlEdad.css"
import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";
import { Context } from "../store/appContext";

const ModalControlEdad = () => {

    const { store, actions } = useContext(Context);

    const token = localStorage.getItem("token");
    console.log(token)

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
            console.log("Hola")
        }
    }, []);
    // Función para redireccionar al hacer clic en "No"
    const redirectToSenda = () => {
        window.location.href = "https://www.senda.gob.cl/informacion-sobre-drogas/conoce-mas-sobre-las-drogas/alcohol/";
    };

    return (
        <>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content modal-content-control-edad">
                        <div class="modal-header-control-edad">
                            <img src={logoElRinconDelVino} className="img-fluid modal-control" alt="logo" />
                        </div>
                        <div class="modal-body-control-edad">
                            ¿Tienes la edad legal para beber alcohol en tu país?
                        </div>
                        <div class="modal-footer-control-edad">
                            <button type="button" class="btn btn-dark btn-control-edad" data-bs-dismiss="modal">Si</button>
                            <button type="button" class="btn btn-dark btn-control-edad" onClick={redirectToSenda}>No</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ModalControlEdad;