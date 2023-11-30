import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


// Fetch a productos
// Hacer un console.log para ver si se trae el arreglo completo
// Hacer un map para replicar el producto con el largo del arreglo (todos los productos)
// Asignarles un key={product.id}
// Acceder a image, nombre y precio -> cambiar los parámetros y hacerlos dinámicos

/*
EJEMPLO PARA AÑADIR FILTRO + MAP (El filtro sería para buscar por la barra de búsqueda, ver si añadirlo en el navbar)

const [search, setSearch] = useState('')

{data.filter((item) => {
    return search.toLowerCase() === '' 
    ? item 
    : item.first_name.toLoweCase().includes(search) 
  })
  .map((item) => {
    <card con sus valores asignados>
    src={item.image}
    {item.name}
    {item.price}
  })}

  */
 const Card = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {productos.map((producto) => (
        <div key={producto.id} className="col-12 col-md-6 col-lg-3">
          <div className="my-5 d-flex justify-content-center">
            <div className="card-product bg-light text-center" style={{ minwidth: "22rem", maxHeight: "40rem", borderRadius: "15px" }}>
              <div className="m-5">
                <img
                  className="card-img-top img-fluid"
                  src={`${producto.image}`}
                  alt={`${producto.nombre}`}
                />
              </div>
              <div className="card-body text-align-center">
                <h4 className="card-title">{`${producto.nombre}`}</h4>
                <h5>{`$${producto.precio}`}</h5>
                <p className="card-text text-align-center">
                  <i className="fa-solid fa-star stars"></i>
                  <i className="fa-regular fa-star stars"></i>
                  <i className="fa-regular fa-star stars"></i>
                  <i className="fa-regular fa-star stars"></i>
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
      ))}
    </>
  );
};


export default Card;
