import React from "react";
import "../../styles/filter.css";

const Filter = () => {
    return (
        <div className="col-1 background-filter-color">
            <div className="container-fluid gx-0 mt-5 filter-container">
                <div className="row">
                    <div className="col-11 mx-auto gx-0">
                        <div className="bg-secondary filter-title text-center">Filtros</div>
                        <div className="form-check background-filteredproduct-color" background-filteredproduct-color>
                            <input type="radio" className="form-check-input" name="btnradio" id="Descuentos" defaultChecked />
                            <label className="form-check-label" >descuentos</label>
                        </div>

                        <div className="form-check background-filteredproduct-color">
                            <input type="radio" className="form-check-input" name="btnradio" id="recomendados" />
                            <label className="form-check-label">Más recomendados</label>
                        </div>

                        <div className="form-check background-filteredproduct-color">
                            <input type="radio" className="form-check-input" name="btnradio" id="instock" />
                            <label className="form-check-label">Con stock</label>
                        </div>
                        <div className="dropdown">
                            <button className="btn custom-btn-filter btn-secondary dropdown-toggle" type="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">
                                Cepas
                            </button>
                            <ul className="dropdown-menu filter-item">
                                <li><a className="dropdown-item" href="#">cepa 1</a></li>
                                <li><a className="dropdown-item" href="#">cepa 2</a></li>
                                <li><a className="dropdown-item" href="#">cepa 3</a></li>
                                <li><a className="dropdown-item" href="#">cepa 4</a></li>
                                <li><a className="dropdown-item" href="#">cepa 5</a></li>
                                <li><a className="dropdown-item" href="#">cepa 6</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;

