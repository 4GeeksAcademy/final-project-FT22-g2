import React, { useEffect } from "react";
import "../../styles/modalControlEdad.css"

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
                    <div class="modal-content">
                        <div class="modal-header-control-edad">
                            <h5 class="modal-title-control-edad" id="staticBackdropLabel">El rincon del vino</h5>
                        </div>
                        <div class="modal-body">
                            Tengo la edad legal para beber alcohol en mi pais
                        </div>
                        <div class="modal-footer-control-control-edad">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Si</button>
                            <button type="button" class="btn btn-dark" onClick={redirectToSenda}>No</button>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
export default ModalControlEdad;