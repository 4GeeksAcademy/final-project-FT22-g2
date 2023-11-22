import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
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
