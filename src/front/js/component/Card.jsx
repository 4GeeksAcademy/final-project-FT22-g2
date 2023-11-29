import React from "react";
import { Link } from "react-router-dom";


const Card = () => {
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

  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="my-5 d-flex justify-content-center">
          <div className="card-product bg-light text-center" style={{ width: "22rem", borderRadius: "15px" }}>
            <div className="m-5">
              <img
                className="card-img-top img-fluid"
                src="https://res.cloudinary.com/dipd6csl7/image/upload/v1701094806/Vinos/vino-9_fi16ge.webp"
                alt="Card image cap"
              />
            </div>
            <div className="card-body text-align-center">
              <h4 className="card-title">Vino Tinto</h4>
              <h5>$$$</h5>
              <p className="card-text text-align-center">
                <i className="fa-solid fa-star stars"></i>
                <i className="fa-regular fa-star stars"></i>
                <i className="fa-regular fa-star stars"></i>
                <i className="fa-regular fa-star stars"></i>
                <i className="fa-regular fa-star stars"></i>
              </p>
              <Link to="/producto">
                <button className="btn custom-btn-card rounded-pill">
                  Ver producto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
