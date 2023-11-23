import React, { useEffect } from "react";
import "../../styles/modalControlEdad.css"
import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";

const ModalControlEdad = () => {

    useEffect(() => {
        // Función para activar el modal después de un cierto tiempo
        function activateModal() {
            var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
                keyboard: false
            });
            myModal.show();
        }

        // Activar la función después de 2 segundos
        const timer = setTimeout(() => {
            activateModal();
        }, 2000);

        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta

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
                        <div class="modal-header modal-header-control-edad">
                            <img src={logoElRinconDelVino} className="img-fluid modal-control" alt="logo" />
                        </div>
                        <div class="modal-body modal-body-control-edad">
                            ¿Tienes la edad legal para beber alcohol en tu país?
                        </div>
                        <div class="modal-footer modal-footer-control-edad">
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