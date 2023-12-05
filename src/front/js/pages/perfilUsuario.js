import React, { useContext } from "react";
import Swal from 'sweetalert2';
import usuarioFoto from "../../img/usuarioFoto.png";
import ModalCerrarSesion from "../component/ModalCerrarSesion.jsx";
import ModalEliminarCuenta from "../component/ModalEliminarCuenta.jsx";
import { Link } from "react-router-dom";
import "../../styles/perfilUsuario.css";
import { Context } from "../store/appContext";


const PerfilUsuario = () => {

  const { store, actions } = useContext(Context)

  const handleEliminarCuenta = async () => {

    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡Se eliminará tu cuenta!",
      icon: "warning",
      showCancelButton: true
    }).then(async (result) => {
      if (result.isConfirmed) {

        try {
          const userId = localStorage.getItem("user_id");
          console.log(userId)

          const response = await fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/users/${userId}`, {
            method: "DELETE"
          });

          if (!response.ok) {
            throw new Error("No se pudo eliminar el usuario");
          }

          Swal.fire(
            "Eliminado!",
            "Tu cuenta ha sido eliminada.",
            "success"
          );

          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          localStorage.removeItem("shoppingCart");

          setTimeout(() => {
            window.location.href = process.env.BASENAME + "registro";
          }, 2000);

        } catch (error) {

          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
          });
        }
      }
    });
  }

  const handleCerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("shoppingCart");
    setTimeout(() => {
      window.location.href = process.env.BASENAME + "registro";
    }, 2000);
  }

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

                  {/* <li className="active">
                    <a href="#">
                      Cambiar contraseña
                    </a>
                  </li> */}

                  <Link to="/historial-compra" className="text-decoration-none">
                    <li>
                      <a href="#">
                        Historial de compras
                      </a>
                    </li>
                  </Link>

                  <Link to="/favoritos" className="text-decoration-none">
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
          <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalCerrarSesion" onClick={handleCerrarSesion}>Cerrar sesion</button>
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