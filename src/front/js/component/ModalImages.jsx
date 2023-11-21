import React from "react";

const ModalImages = () => {
    return (
        <>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="ModalImages" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body container">
                            <div className="row">
                                <div className="col-5">
                                    <img
                                        className="card-img-top my-2"
                                        src="https://dummyimage.com/300x300/000/fff"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div className="col-7 mt-3">
                                    <h5>Nombre Producto</h5>
                                    <div className="my-3">
                                        <i class="fa-solid fa-star stars"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <img src="../front/js/component/ModalImages.jsx" alt="icon favoritos" />
                                    </div>
                                    Precio: $10.000
                                    <div>
                                    </div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptates maxime aut, rem incidunt assumenda. Impedit error maxime assumenda, consequatur ea necessitatibus illo aspernatur laudantium, similique qui praesentium! Aut, odio.
                                    <div>
                                        <button type="button" class="btn-modal btn-secondary mt-4">Agregar al carrito</button>
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