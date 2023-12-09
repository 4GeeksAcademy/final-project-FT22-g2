import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const SearchResults = () => {

    const { store } = useContext(Context);

    // function handleResetCategories() {
    //     setTimeout(() => {
    //         window.location.reload(false)
    //     }, 1);
    // }

    // const [productos, setProductos] = useState([]);

    // useEffect(() => {
    //     fetch("https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos")
    //         .then((response) => response.json())
    //         .then((data) => setProductos(data))
    //         .catch((error) => console.error("Error fetching data:", error));
    // }, []);

    return (
        <ul>
            {/* {productos.map((producto, index) => (
                <li>

                    {/* <div key={producto.id} className="col-12 col-md-6 col-lg-3">
                        <div className="my-5 d-flex justify-content-center " >
                            <div className="card-product bg-light text-center" style={{ width: "100%", maxWidth: "300px", minHeight: "625px" }} >
                                <div className="m-5">
                                    <img
                                        className="card-img-top img-fluid"
                                        src={`${producto.image}`}
                                        alt={`${producto.nombre}`}
                                        style={{ maxHeight: "280px" }}
                                    />
                                </div>
                                <div className="card-body text-align-center" style={{ overflow: "hidden" }}>
                                    <h4 className="card-title custom-text-card" title={`${producto.nombre}`}>
                                        {producto.nombre.length > 19 ? `${producto.nombre.substring(0, 19)}...` : producto.nombre}
                                    </h4>
                                    <h5>${`$${producto.precio}`}</h5>
                                    <p className="card-text text-align-center">
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-solid fa-star stars"></i>
                                        <i className="fa-regular fa-star stars"></i>
                                    </p>
                                    <Link to={`/producto/${producto.id}`}>
                                        <button className="btn custom-btn-card rounded-pill" onClick={handleResetCategories}>
                                            Ver producto
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* </li> */}

            {/* ))}  */}
        </ul>
    )
}

export default SearchResults;