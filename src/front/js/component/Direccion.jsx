import React from "react"
import "../../styles/cambiarDireccion.css";


const Direccion = () => {
    return (
        <>

            {/* formulario */}

            <div className="card d-flex">
                <div className="card-body" style={{ borderRadius: '10px', boxShadow: '0 0 10px #dadada'}}> 

                    <form>
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
                                <input type="text" class="form-control" placeholder="Calle" aria-label="Calle" />
                            </div>
                            {/* numero de casa */}
                            <div class="col-6">
                                <label for="inputNumero" class="form-label">Número</label>
                                <input type="number" class="form-control" placeholder="N° de casa / dpto" aria-label="Número de casa" min="1" />
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default Direccion;