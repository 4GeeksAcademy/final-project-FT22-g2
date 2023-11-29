import React, { useState } from "react";
import rigoBaby from "../../img/rigo-baby.jpg"
import vinoFavoritos from "../../img/vino-add-favorites.png"
import vinoQuitarFavoritos from "../../img/vino-modified 1.png"

import "../../styles/favoritos.css";
import { Link } from "react-router-dom";

const Favoritos = () => {

    const [favorito, setFavorito] = useState(false);

    const handleAddFavorites = () => {
        setFavorito(!favorito);
    }

    return (
        <>
            {/* ---- // HISTORIAL DE PRODUCTOS // ---- */}
            <div className="container-favoritos">

                {/* BARRA DE BÚSQUEDA PRODUCTOS */}
                <form className="container-input-search-favoritos">
                    <input className="input-search-favoritos" type="search" placeholder="Próximamente podrás buscar entre tus compras!" />
                </form>

                {/* ---- // PRODUCTO HISTORIAL // ----' */}
                <div className="container-contenido-favoritos">
                    <div className="producto-favoritos row text-center">
                        <h1>Próximamente podrás añadir tus vinos favoritos a tu lista!</h1>
                        {/* <div className="img-producto-historial-compra col-2"> */}
                        {/* <img src={rigoBaby} alt="example" width="100px" height="100px" /> */}
                        {/* </div> */}
                        {/*  */}
                        {/* ---- Descripción producto ---- */}
                        {/* <div className="col-2 text-start"> */}
                        {/* <h4>Vino tinto</h4> */}
                        {/* <h5 className="unidades-producto-favoritos">Vino 750cc 1 unidad</h5> */}
                        {/* </div> */}
                        {/*  */}
                        {/* ---- Precio ---- */}
                        {/* <div className="col-2"> */}
                        {/* <h5>Precio</h5> */}
                        {/* <h5 className="pt-2">$$$</h5> */}
                        {/* </div> */}
                        {/*  */}
                        {/* ---- Calificación ---- */}
                        {/* <div className="calificacion-producto-favoritos col-2"> */}
                        {/* <h5>Calificación del producto:</h5> */}
                        {/* <p className="card-text text-align-center pt-1"> */}
                        {/* <i className="fa-solid fa-star stars"></i> */}
                        {/* <i className="fa-solid fa-star stars"></i> */}
                        {/* <i className="fa-solid fa-star stars"></i> */}
                        {/* <i className="fa-solid fa-star stars"></i> */}
                        {/* <i className="fa-regular fa-star stars"></i> */}
                        {/* </p> */}
                        {/* </div> */}
                        {/*  */}
                        {/* ---- Añadir o quitar de favoritos ---- */}
                        {/* <div className="col-2 contenedor-img-favoritos"> */}
                        {/* <button type="button" className="btn-add-favorites" onClick={handleAddFavorites}> */}
                        {/* <img className="add-favorites-img" src={favorito ? vinoQuitarFavoritos : vinoFavoritos} alt="add-favorites" width="100px" height="100px" /> */}
                        {/* </button> */}
                        {/* </div> */}
                        {/*  */}
                        {/* ---- Comprar producto ---- */}
                        {/* <div className="col-2"> */}
                        {/* <Link to="/producto"> */}
                        {/* <button className="btn-comprar-producto-favoritos" type="button"> */}
                        {/* Comprar */}
                        {/* </button> */}
                        {/* </Link> */}
                        {/* </div> */}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Favoritos;