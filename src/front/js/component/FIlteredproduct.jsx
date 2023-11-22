import React from "react";
import Card from "./Card.jsx";
import "../../styles/filter.css";

const Filteredproduct = () => {
    return (
        <>
            <div className="col-11 background-filteredproduct-color">
                <div className="row justify-content-center align-self-center">
                    <div className="col12 text-end  orderbar-color  custom-text-bar">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn text-end orderbar-color filter-custom-height custom-text-bar dropdown-toggle d-flex align-items-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Ordenar por
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button className="dropdown-item" type="button">Mayor a menor precio</button></li>
                                <li><button className="dropdown-item" type="button">Menor a mayor precio</button></li>
                                <li><button className="dropdown-item" type="button">A - Z</button></li>
                                <li><button className="dropdown-item" type="button">Z - A</button></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>
                    <div className="col-3">
                        <Card />
                    </div>

                </div>
                <div className="row d-flex text-center justify-content-center">

                    <div className="col-3">
                        <div className="btn-toolbar mb-3 justify-content-center " role="toolbar" aria-label="Change page">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" className="btn btn-outline-secondary">&lt;</button>
                                <button type="button" className="btn btn-outline-secondary">1</button>
                                <button type="button" className="btn btn-outline-secondary">2</button>
                                <button type="button" className="btn btn-outline-secondary">&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filteredproduct;
