import React, { useState } from "react"
import "../../styles/cambiarDireccion.css";
import Swal from 'sweetalert2';
import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";


const Direccion = () => {

    const [state, setState] = useState({
        comuna: "",
        calle: "",
        numeroCasa: "",
        codigoPostal: "",
        numeroContacto: ""
    })

    const handleOnClickDefault = (e) => {
        e.preventDefault();

        const numberOnly = /^\d+$/;

        let isValid = true;

        if (state.comuna === '' || state.calle === '' || state.numeroCasa === '' || state.codigoPostal === '' || state.numeroContacto === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos son obligatorios!",
            });
        } else {

            if (state.comuna.length < 1 || state.comuna.length > 30) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "La comuna debe ser válida!",
                });
                isValid = false;
            }

            if (state.calle.length < 1 || state.calle.length > 30) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "La calle debe ser válida!",
                });
                isValid = false;
            }

            if (!numberOnly.test(state.numeroCasa)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Número de casa sólo puede contener dígitos!",
                });
                isValid = false;
            }

            if (state.numeroCasa.length < 0 || state.numeroCasa.length > 7) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Su número de casa debe ser válido!",
                });
                isValid = false;
            }

            if (!numberOnly.test(state.codigoPostal)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "El código postal sólo puede contener dígitos!",
                });
                isValid = false;
            }

            if (state.codigoPostal.length == 6) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Código postal debe tener 7 dígitos!",
                });
                isValid = false;
            }

            if (!numberOnly.test(state.numeroContacto)) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Número de contacto sólo puede contener dígitos!",
                });
                isValid = false;
            }

            if (state.numeroContacto.length == 8) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Número de contacto debe tener 9 dígitos!",
                });
                isValid = false;
            }

            if (isValid) {

                let timerInterval;
                Swal.fire({
                    icon: "success",
                    title: "¡Gracias por su compra!",
                    imageUrl: logoElRinconDelVino,
                    imageWidth: 250,
                    imageHeight: 180,
                    imageAlt: "Custom image",
                    html: "Será redirigido a la página principal en <b></b> milisegundos.",
                    timer: 7000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                        window.location.href = "/";
                    }
                });
            }
        }
    }

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
    }

    return (
        <div className="container mb-5 container-formulario-direccion-pago">

            {/* formulario */}
            <h4 className="direccion-de-envio pt-4 pb-2 text-center">Dirección de envío:</h4>
            <div className="card d-flex">
                <div className="card-body container" style={{ borderRadius: '10px', boxShadow: '0 0 10px #dadada' }}>

                    <form className="needs-validation" novalidate>
                        <div className="row mb-4">
                            <div className="col-6">
                                {/*  Region */}
                                <label for="formGroupExampleInput" className="form-label">Región</label>
                                <select type="text" className="form-select" placeholder="Región" aria-label="Región" required>
                                    <option selected>Selecciona tu región</option>
                                    <option value="1">Región de Arica y Parinacota</option>
                                    <option value="2">Región de Tarapacá</option>
                                    <option value="3">Región de Antofagasta</option>
                                    <option value="4">Región de Atacama</option>
                                    <option value="5">Región de Coquimbo</option>
                                    <option value="6">Región de Valparaíso</option>
                                    <option value="8">Región Metropolitana</option>
                                    <option value="9">Región del Libertador General Bernardo O'Higgins</option>
                                    <option value="10">Región del Maule</option>
                                    <option value="11">Región de Ñuble</option>
                                    <option value="12">Región del Biobío</option>
                                    <option value="13">Región de La Araucanía</option>
                                    <option value="14">Región de Los Ríos</option>
                                    <option value="15">Región de Los Lagos</option>
                                    <option value="16">Región de Aysén del General Carlos Ibáñez del Campo</option>
                                    <option value="17">Región de Magallanes y de la Antártica Chilena</option>
                                </select>
                            </div>
                            {/* comuna */}
                            <div className="col-6">
                                <label for="inputComuna" className="form-label">Comuna</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="comuna"
                                    placeholder="Comuna"
                                    aria-label="Comuna"
                                    id="comuna"
                                    maxLength={30}
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />

                            </div>
                            <div className="invalid-feedback" id="comuna"></div>
                        </div>
                        <div className="row mb-4">
                            {/* calle */}
                            <div className="col-6">
                                <label for="inputCalle" className="form-label">Calle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="calle"
                                    placeholder="Calle"
                                    aria-label="Calle"
                                    id="calle"
                                    maxLength={30}
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                                <div className="invalid-feedback" id="calle"></div>
                            </div>
                            {/* numero de casa */}
                            <div className="col-6">
                                <label for="inputNumero" className="form-label">Número</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="numeroCasa"
                                    placeholder="N° de casa / dpto"
                                    aria-label="Número de casa"
                                    maxLength={15}
                                    id="numero"
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                            <div className="invalid-feedback" id="numero"></div>
                        </div>
                        <div className="row mb-4">
                            {/* codigo postal */}
                            <div className="col-6">
                                <label for="finputCodigoPostal" className="form-label">Código postal</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="codigoPostal"
                                    placeholder="código postal"
                                    aria-label="Código postal"
                                    maxLength={7}
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                            {/* Número de contacto */}
                            <div className="col-6">
                                <label for="finputTelefono" className="form-label">Número de contacto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="numeroContacto"
                                    placeholder="N°de contacto"
                                    aria-label="Número de contacto"
                                    maxLength={9}
                                    required
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                        </div>

                        <div className="container-checkbox-direccion d-flex justify-content-center">

                            {/* seleccion casa */}
                            <div className="form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    <i className="fa-solid fa-house icono-casa-cambiarDireccion"></i> Casa

                                </label>
                            </div>
                            {/* seleccion trabajo */}
                            <div className="form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    <i className="fa-solid fa-briefcase icono-trabajo-cambiarDireccion" ></i> Trabajo
                                </label>
                            </div>
                        </div>
                        {/*  guardar como predeterminada */}
                        {/* <div className="form-check p-4 d-flex justify-content-center">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckIndeterminate"
                            />
                            <label className="form-check-label" for="flexCheckIndeterminate">
                                Guardar esta dirección como predeterminada
                            </label>
                        </div> */}

                        {/* BOTON PARA PAGAR */}
                        <div className="container-boton-para-pagar d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark btn-lg boton-para-pagar" onClick={handleOnClickDefault}>
                                Pagar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Direccion;