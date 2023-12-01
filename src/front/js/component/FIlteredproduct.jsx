import React, { useState } from "react";
import "../../styles/filter.css";
import { CardContainer4, CardContainer16 } from "./Card.jsx";

const Filteredproduct = () => {

    return (
        <>
            {/* <div className="col-12 mx-auto">
                <div className="row justify-content-center align-self-center">
                    <div className="col12 text-end  orderbar-color px-0">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn text-end orderbar-color filter-custom-height custom-text-bar dropdown-toggle d-flex align-items-center me-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Ordenar por
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" type="button">Próximamente</button></li>
                            </ul>
                        </div>
                        <div className="container-fluid  background-filteredproduct-color custom-text-filterproduct ">
                            <div className="row justify-content-center align-self-center">
                                <h1>AQUÍ DEBERIAN ESTAR LOS PRODUCTOS</h1>
                                <CardContainer4 />
                                <CardContainer16 />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};

export default Filteredproduct;
