import React from "react";
import "../../styles/filter.css";

const Filter = () => {
    return (
        <div className="col-1 background-filter-color">
            <div className="container-fluid mt-5 gx-0 filter-container">
                <div className="row">
                    <div className="col-11 mx-auto gx-0">
                        <div className=" filter-title text-center filter-custom-height">Filtros</div>
                        <div className="form-check background-filteredproduct-color" background-filteredproduct-color>
                            <input type="radio" className="form-check-input" name="btnradio" id="descuentos" defaultChecked />
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
                        <button className="btn background-filteredproduct-color custom-btn-filter " type="button" data-bs-toggle="collapse" data-bs-target="#cepas" aria-expanded="false" aria-controls="collapseExample">
                            Cepas &#9660;
                        </button>
                        <div className="collapse collapse-color " id="cepas">
                            <div className="card card-body custom-card-filter background-filteredproduct-color">
                            <a className="filter-item decoration-none" href="#">cepa 1</a>
                            <a className="filter-item" href="#">cepa 2</a>
                            <a className="filter-item" href="#">cepa 3</a>
                            <a className="filter-item" href="#">cepa 4</a>
                            <a className="filter-item" href="#">cepa 5</a>
                            <a className="filter-item" href="#">cepa 6</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Filter;

