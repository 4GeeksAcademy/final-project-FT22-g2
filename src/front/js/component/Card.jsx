import React from "react";
import { Link } from "react-router-dom";


const Card = () => {

  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="my-5 d-flex justify-content-center">
          <div className="card-product text-center" style={{ width: "22rem", borderRadius: "15px" }}>
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
                <button className="btn btn-light rounded-pill">
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
