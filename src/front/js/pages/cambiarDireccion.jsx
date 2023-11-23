import React from "react";
import usuarioFoto from "../../img/usuarioFoto.png";

import "../../styles/cambiarDireccion.css";


const CambiarDireccion = () => {

    return (
        <>

            <div className="container-formulario-cambiarDireccion">
                <form >
                    {/*  foto usuario */}
                    <div className="user-pic">
                        <img src={usuarioFoto} alt="usuario foto" className="usuarioFoto" />
                    </div>
                    {/* nombre usuario */}
                    <div className="user-name text-center pb-3">
                        <h2 className="name">Batman</h2>
                    </div>
                    {/* formulario */}
                    <div class="row mb-4">
                        <div class="col-6">
                            {/*  Region */}
                            <label for="formGroupExampleInput" class="form-label">Región</label>
                            <select type="text" class="form-select" placeholder="Región" aria-label="Región">
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
                        <div class="col-6">
                            <label for="inputComuna" class="form-label">Comuna</label>
                            <input type="text" class="form-control" placeholder="Comuna" aria-label="Comuna" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        {/* calle */}
                        <div class="col-6">
                            <label for="inputCalle" class="form-label">Calle</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="Calle" />
                        </div>
                        {/* numero de casa */}
                        <div class="col-6">
                            <label for="inputNumero" class="form-label">Número</label>
                            <input type="number" class="form-control" placeholder="N° de casa / departamento" aria-label="Número de casa" min="1" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        {/* codigo postal */}
                        <div class="col-6">
                            <label for="finputCodigoPostal" class="form-label">Código postal</label>
                            <input type="text" class="form-control" placeholder="código postal" aria-label="Código postal" />
                        </div>
                        {/* Número de contacto */}
                        <div class="col-6">
                            <label for="finputTelefono" class="form-label">Número de contacto</label>
                            <input type="text" class="form-control" placeholder="N°de contacto" aria-label="Número de contacto" />
                        </div>
                    </div>
                    {/* seleccion casa */}
                    <div class="form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <i class="fa-solid fa-house icono-casa-cambiarDireccion"></i> Casa

                        </label>
                    </div>
                    {/* seleccion trabajo */}
                    <div class="form-check-inline">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            <i class="fa-solid fa-briefcase icono-trabajo-cambiarDireccion" ></i> Trabajo
                        </label>
                    </div>
                    {/*  guardar como predeterminada */}
                    <div class="form-check p-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            Guardar esta direccion como predeterminada
                        </label>
                    </div>
                    {/* boton actualizar */}
                    <div class="d-grid gap-2 col-6 mx-auto mb-3 boton-actualizar-cambiarDireccion">
                        <button class="btn btn-dark w-100" type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CambiarDireccion;