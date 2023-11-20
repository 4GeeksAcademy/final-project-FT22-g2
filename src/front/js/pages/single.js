// single.js
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ProductCard from "../components/ProductCard";

const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const product = {
    name: "Nombre de vino",
    price: 20,
    imageUrl: "https://dummyimage.com/100x300/000/fff",
    stars: 5,
  };

  return (
    <div className="container">
      {/* ... Código restante */}
      <div className="row my-5">
        <div className="col-md-6">
          <img
            className="card-img-top"
            src={product.imageUrl}
            alt="Card image cap"
          />
        </div>
        <div className="col-md-6">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">
            {Array.from({ length: product.stars }, (_, index) => (
              <i key={index} className="fa-solid fa-star stars"></i>
            ))}
          </p>
          <button className="btn btn-light rounded-pill my-2">
            Agregar al carrito
          </button>
        </div>
      </div>
      {/* ... Más código */}
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single.js;
