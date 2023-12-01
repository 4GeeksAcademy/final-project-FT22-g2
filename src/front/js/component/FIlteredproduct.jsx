import React from "react";
import "../../styles/filter.css";
import { CardContainer4, CardContainer16 } from "./Card.jsx";

const Filteredproduct = () => {
    return (
        <>
            <div className="col-12 mx-auto">
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
                                {/* <li><button className="dropdown-item" type="button">Menor a mayor precio</button></li>
                                <li><button className="dropdown-item" type="button">A - Z</button></li>
                                <li><button className="dropdown-item" type="button">Z - A</button></li> */}
                            </ul>
                        </div>
                        <div className="container-fluid  background-filteredproduct-color custom-text-filterproduct ">
                            <div className="row justify-content-center align-self-center">
                                <CardContainer16 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Filteredproduct;
