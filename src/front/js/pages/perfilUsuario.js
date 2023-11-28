import React from "react";
//import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';
import usuarioFoto from "../../img/usuarioFoto.png";

import { Link } from "react-router-dom";

import "../../styles/perfilUsuario.css";
import ModalCerrarSesion from "../component/ModalCerrarSesion.jsx";
import ModalEliminarCuenta from "../component/ModalEliminarCuenta.jsx";

const PerfilUsuario = () => {

  //const history = useHistory();

  const handleEliminarCuenta = () => {
    Swal.fire({
      title: '¿Estas seguro de que quieres eliminar tu cuenta?',
      text: "¡Te perderas de nuestras mejores oferta!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminar',
          text: 'Tu cuenta ha sido eliminada',
          icon: 'success'
        //}).then(() => {
          // Redirige a la página de inicio después de confirmar la eliminación de la cuenta
         // history.push('/');
        });
      }
    });
  };

  return (
    <>
      <div>
        <ModalCerrarSesion />
        <ModalEliminarCuenta />
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
                    <a href="#">
                      Cambiar contraseña
                    </a>
                  </li>


                  <Link to="/cambiar-direccion">
                    <li>
                      <a href="#">
                        Cambiar direccion
                      </a>
                    </li>
                  </Link>

                  <Link to="/historial-compra">
                    <li>
                      <a href="#">
                        Historial de compras
                      </a>
                    </li>
                  </Link>

                  <Link to="/favoritos">
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
         
          <button type="button" className="btn btn-danger" onClick={handleEliminarCuenta}>Eliminar cuenta</button>
         
        </div>
      </div>
    </>
  )
}

export default PerfilUsuario;