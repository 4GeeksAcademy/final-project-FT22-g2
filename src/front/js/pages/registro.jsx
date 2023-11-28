import React, { useState } from 'react';
import "../../styles/registro.css";

const Registro = () => {

    const [formData, setFormData] = useState({})
    const [formStatus, setFormStatus] = useState()

    const onSubmit = (event) => {
        setFormStatus("submitted")
    }

    return (
        <>
            <div className="container-registro">
                <div class="card card-registro">
                    <div class="card-body">
                        <div className="card-informacion-registro">
                            <h2>Crear cuenta</h2>

                            <form onSubmit={onSubmit} noValidate>


                                <div className="row container-inputs-registro">
                                    <input type="text" placeholder='Nombre' className='input-registro' required onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                                    {
                                        formStatus === "submitted" && !formData.name ? <p className='text-warning'>campo requerido</p> : <></>
                                    }

                                    <input type="text" placeholder='Apellido' className='input-registro' required />
                                    <input type="email" placeholder='Email' className='input-registro' required />
                                    <input type="password" placeholder='Contraseña' className='input-registro' required />
                                </div>

                                <div className="container-terminos-y-condiciones">
                                    <input type="checkbox" name="terminos" id="terminosYcondiciones" required />
                                    <label className='terminosYcondicionesLabel'>Acepto los términos y condiciones</label>
                                </div>

                                <div className="container-btn-registro">
                                    <button type="submit" className='btn btn-secondary w-50'>Registrarme</button>
                                </div>

                                <div className="container-btn-registro-google">
                                    <button className="btn btn-danger w-75" value="Login"> Continúa con <i class="fab fa-google me-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Registro;