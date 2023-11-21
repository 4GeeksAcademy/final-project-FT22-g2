import React from "react";
import usuarioFoto from "../../img/usuarioFoto.png";
import "../../styles/perfilUsuario.css";
import { Link } from "react-router-dom";

const PerfilUsuario = () => {
  return (
    <>
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

        <div>
          <button type="button" className="btn btn-dark">Cerrar sesion</button>
        </div>

      </div>
    </>
  )
}

export default PerfilUsuario;