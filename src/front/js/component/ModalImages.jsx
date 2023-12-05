import React, { useState } from "react";
import vinoFavoritos from "../../img/vino-add-favorites.png"
import vinoQuitarFavoritos from "../../img/vino-modified 1.png"
import { Link } from "react-router-dom";
import wineMissing620 from "../../img/wine-620x620.png"

const ModalImages = () => {

    const [favorito, setFavorito] = useState(false);

    const handleAddFavorites = () => {
        setFavorito(!favorito);
    }

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="ModalImages" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body container">
                            <div className="row">
                                <div className="col-md-5">
                                    <img
                                        className="card-img-top img-fuild my-2"
                                        src={wineMissing620}
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="col-md-7 mt-3">
                                    <div className="row">
                                        <h5 className="col-9 nombre-producto-modal-img">Nombre Producto</h5>

                                        <div className="container-button-favorite-modal-img col-1">
                                            <button type="button" className="btn-add-favorites" onClick={handleAddFavorites}>
                                                <img className="add-favorites-img" src={favorito ? vinoQuitarFavoritos : vinoFavoritos} alt="add-favorites" width="45px" height="45px" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="my-3 row d-flex align-items-center">
                                        <div className="container-stars-modal-img">
                                            <i className="fa-solid fa-star stars"></i>
                                            <i className="fa-solid fa-star stars"></i>
                                            <i className="fa-solid fa-star stars"></i>
                                            <i className="fa-solid fa-star stars"></i>
                                            <i className="fa-regular fa-star stars"></i>
                                        </div>
                                    </div>
                                    <h4>Precio: $$$</h4>
                                    <div>
                                    </div>
                                    En un futuro es nuestro plan deslumbrarlos con maravillosos artículos destacados!
                                    <div className="d-flex justify-content-center" data-bs-dismiss="modal">
                                        <Link to="/" type="button" className="btn btn-modal btn-secondary mt-2 w-75 d-block data-bs-dismiss disabled">
                                            Próximamente!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModalImages