import React from "react"
import "../../styles/cambiarDireccion.css";


const Direccion = () => {

    const handleOnClickDefault = (e) => {
        e.preventDefault()

        if (state.number == "" || state.name == "" || state.expiry == "" || state.cvc == "") {
            alert("Todos los campos son obligatorios")
        } else {
            alert("Los campos se rellenaron correctamente")
        }
    }


    return (
        <>

            {/* formulario */}

            <div className="card d-flex">
                <div className="card-body" style={{ borderRadius: '10px', boxShadow: '0 0 10px #dadada' }}>

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
                            <div class="col-6">
                                <label for="inputComuna" className="form-label">Comuna</label>
                                <input type="text" className="form-control" placeholder="Comuna" aria-label="Comuna" id="comuna" required />
                            </div>
                            <div className="invalid-feedback" id="comuna"></div>
                        </div>
                        <div class="row mb-4">
                            {/* calle */}
                            <div class="col-6">
                                <label for="inputCalle" className="form-label">Calle</label>
                                <input type="text" className="form-control" placeholder="Calle" aria-label="Calle" id="calle" required />
                                <div className="invalid-feedback" id="calle"></div>
                            </div>
                            {/* numero de casa */}
                            <div class="col-6">
                                <label for="inputNumero" className="form-label">Número</label>
                                <input type="number" className="form-control" placeholder="N° de casa / dpto" aria-label="Número de casa" min="1" id="numero" required />
                            </div>
                            <div className="invalid-feedback" id="numero"></div>
                        </div>
                        <div class="row mb-4">
                            {/* codigo postal */}
                            <div class="col-6">
                                <label for="finputCodigoPostal" className="form-label">Código postal</label>
                                <input type="number" className="form-control" placeholder="código postal" aria-label="Código postal" required />
                            </div>
                            {/* Número de contacto */}
                            <div class="col-6">
                                <label for="finputTelefono" className="form-label">Número de contacto</label>
                                <input type="number" className="form-control" placeholder="N°de contacto" aria-label="Número de contacto" required />
                            </div>
                        </div>
                        {/* seleccion casa */}
                        <div class="form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                <i className="fa-solid fa-house icono-casa-cambiarDireccion"></i> Casa

                            </label>
                        </div>
                        {/* seleccion trabajo */}
                        <div className="form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                <i className="fa-solid fa-briefcase icono-trabajo-cambiarDireccion" ></i> Trabajo
                            </label>
                        </div>
                        {/*  guardar como predeterminada */}
                        <div className="form-check p-4">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label className="form-check-label" for="flexCheckIndeterminate">
                                Guardar esta dirección como predeterminada
                            </label>
                        </div>
                        {/* BOTON PARA validar */}
                        <div className="boton-actualizar-cambiarDireccion p-3">
                            <button type="submit" class="btn btn-secondary btn-sm boton-actualizar-cambiarDireccion" onClick={handleOnClickDefault} >Validar dirección</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}


export default Direccion;