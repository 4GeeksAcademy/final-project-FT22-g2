import React from "react";
import usuarioFoto from "../../img/usuarioFoto.png";

import { Link } from "react-router-dom";

import "../../styles/perfilUsuario.css";
import ModalCerrarSesion from "../component/ModalCerrarSesion.jsx";
import ModalEliminarCuenta from "../component/ModalEliminarCuenta.jsx";
import ModalCambiarContraseña from "../component/ModalCambiarContraseña.jsx";


const PerfilUsuario = () => {
  return (
    <>
      <div>
        <ModalCerrarSesion />
        <ModalEliminarCuenta />
        <ModalCambiarContraseña />
      </div>

      <div className="card-container">
        <div className="row profile">
          <div className="col md-3">
            <div className="profile-sidebar">
              <div className="user-pic">
                <img src={usuarioFoto} alt="usuario foto" className="usuarioFoto" />
              </div>
              <div className="user-name text-center">
                <h2 className="name">Batman</h2>
              </div>

              <div className="profile-usermenu">
                <ul className="nav list-group list-group-flush text-center">


                  <li className="active">
                    <a href="#modalCambiarContraseña"
                      className="modalCambiarContraseña"
                      data-bs-toggle="modal">
                      Cambiar contraseña
                    </a>
                  </li>

                  <Link to="/cambiar-direccion" style={{ textDecoration: 'none' }}>
                    <li>
                      <a href="#" >
                        Cambiar direccion
                      </a>
                    </li>
                  </Link>

                  <Link to="/historial-compra" style={{ textDecoration: 'none' }}>
                    <li>
                      <a href="#">
                        Historial de compras
                      </a>
                    </li>
                  </Link>

                  <Link to="/favoritos" style={{ textDecoration: 'none' }}>
                    <li>
                      <a href="#">
                        Mis favoritos
                      </a>
                    </li>
                  </Link>
                </ul>

              </div>
            </div>
          </div>
        </div>
        {/* boton cerrar sesion */}
        <div className="d-grid gap-2 col-6 mx-auto boton-cerrar-sesion">
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalCerrarSesion">Cerrar sesion</button>
        </div>
        {/* boton eliminar cuenta */}
        <div className="d-grid gap-2 col-6 mx-auto boton-eliminar-cuenta">
          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminarCuenta">Eliminar cuenta</button>
        </div>
      </div>
    </>
  )
}

export default PerfilUsuario;