import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/front/styles/index.css";

function handleResetCategories() {
  setTimeout(() => {
    window.location.reload(false)
  }, 1);
}

const Card = ({ productos }) => (
  <>
    {productos.map((producto) => (
      <div key={producto.id} className="col-12 col-md-6 col-lg-3">
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
      </div>
    ))}
  </>
);

const CardContainer4 = () => {
  const [productos, setProductos] = useState([]);
  const cantidadVisible = 4;

  useEffect(() => {
    fetch("https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <Card productos={productos.slice(0, cantidadVisible)} />;
};

const CardContainer16 = ({ tipo }) => {
  const [productos, setProductos] = useState([]);
  const [cantidadVisible, setCantidadVisible] = useState(16);

  useEffect(() => {
    fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos/tipo/${tipo}`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("Error en el card16, tipo de vino", tipo)
  }, [tipo]);

  return (
    <div className="row">
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

    </div>
  );
};

const CardFilterCategoria = ({ categoria }) => {
  const [productos, setProductos] = useState([]);
  const [cantidadVisible, setCantidadVisible] = useState(16);

  useEffect(() => {
    fetch(`https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos/categoria/${categoria}`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("Error en el card16, productos", categoria)
  }, [categoria]);

  return (
    <div className="row">
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

    </div>
  );
};

export { CardContainer4, CardFilterCategoria, CardContainer16, Card};