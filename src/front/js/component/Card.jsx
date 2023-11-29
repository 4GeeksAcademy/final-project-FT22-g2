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
      <div className="my-5 d-flex justify-content-center">
        <div className="card-product text-center" style={{ width: "22rem", borderRadius: "15px" }}>
          <div className="m-5">
            <img
              className="card-img-top img-fluid"
              src="https://dummyimage.com/200x300/000/fff"
              alt="Card image cap"
            />
          </div>
          <div className="card-body text-align-center">
            <h4 className="card-title">Vino Tinto</h4>
            <h5>$$$</h5>
            <p className="card-text text-align-center">
              <i class="fa-solid fa-star stars"></i>
              <i class="fa-regular fa-star stars"></i>
              <i class="fa-regular fa-star stars"></i>
              <i class="fa-regular fa-star stars"></i>
              <i class="fa-regular fa-star stars"></i>
            </p>
            <Link to="/producto">
              <button className="btn btn-light rounded-pill">
                Ver producto
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
