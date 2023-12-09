import React, { useState, useEffect } from "react";
import "../../styles/filter.css";
import { Card } from "./Card.jsx";
import { useSearchParams } from "react-router-dom";

const Filteredproduct = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [busqueda, setBusqueda] = useState(searchParams.get("q") || "");
    const [productos, setProductos] = useState([]);
    const [cantidadVisible, setCantidadVisible] = useState(16);

    useEffect(() => {
        // Actualiza los parámetros de la URL cuando cambia la búsqueda
        setSearchParams({ q: busqueda });

        fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos/${busqueda}`)
            .then((response) => response.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [busqueda, setSearchParams]);

    return (
        <>
            <div className="col-12 mx-auto">
                <div className="row justify-content-center align-self-center">
                    <div className="col12 text-end orderbar-color px-0">
                        {/* Resto del código */}
                        <div className="container-fluid background-filteredproduct-color custom-text-filterproduct">
                            <div className="row justify-content-center align-self-center">
                                <h1>{busqueda}</h1>
                                {productos.length > 0 ? (
                                    <>
                                        <Card productos={productos.slice(0, cantidadVisible)} />
                                        {productos.length > cantidadVisible && (
                                            <div className="col-12 d-flex justify-content-center mt-3">
                                                <button
                                                    className="button-ver-mas-productos"
                                                    onClick={() => setCantidadVisible(cantidadVisible + 16)}
                                                >
                                                    Ver más
                                                </button>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <p>No se encontraron productos con '{busqueda}' en el nombre</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filteredproduct;
