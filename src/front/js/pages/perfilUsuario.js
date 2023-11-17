import React from "react";
import usuarioFoto from "../../img/usuarioFoto.png";
import "../../styles/perfilUsuario.css";

const PerfilUsuario = () => {
    return (
        <>



<div className="card">
      <div className="banner">
       <img src={usuarioFoto} alt="usuario foto" className="usuarioFoto"/>
      </div>
      <h2 className="name">Batman</h2>
      <div className="actions">
        
        <div className="boton">
          <button>cerrar sesion</button>
        </div>
      </div>
      <div className="desc">
        Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.
      </div>
    </div>
 

        </>


    )
}

export default PerfilUsuario;