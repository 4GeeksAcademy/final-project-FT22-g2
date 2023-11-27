import React from "react";
import usuarioFoto from "../../img/usuarioFoto.png";
import Direccion from "../component/Direccion.jsx";

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
                        <h2 className="name">Nombre de usuario</h2>
                    </div>
                    {/* COMPONENTE DIRECCION*/}
                   <Direccion />
                    {/* boton actualizar */}
                    <div class="d-grid gap-2 col-6 mx-auto mb-3 p-5 boton-actualizar-cambiarDireccion">
                        <button class="btn btn-dark w-100" type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CambiarDireccion;