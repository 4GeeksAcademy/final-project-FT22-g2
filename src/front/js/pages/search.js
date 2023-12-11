import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import Filteredproduct from "../component/FIlteredproduct.jsx"

export const Search = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="col-12 mx-auto mt-5">
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
                            <Filteredproduct />

                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};