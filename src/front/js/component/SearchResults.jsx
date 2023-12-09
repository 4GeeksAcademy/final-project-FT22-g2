import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto, index) => (
        <li key={producto.id}>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="my-5 d-flex justify-content-center ">
              <div
                className="card-product bg-light text-center"
                style={{ width: "100%", maxWidth: "300px", minHeight: "625px" }}
              >
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
                    <button className="btn custom-btn-card rounded-pill">
                      Ver producto
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
