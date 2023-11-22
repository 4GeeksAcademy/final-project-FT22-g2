import React from "react";
import Card from "./Card.jsx";
import "../../styles/filter.css";

const Filteredproduct = () => {
    return (
        <>
            <div className="col-11 background-filteredproduct-color">
                <div className="row justify-content-center align-self-center">
                    <div className="col12 text-center orderbar-color filter-custom-height">Ordenar por:</div>
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
