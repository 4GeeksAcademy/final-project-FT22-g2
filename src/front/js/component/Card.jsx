import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="col-3 my-5 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem", borderRadius: "15px" }}>
          <div className="m-5">
            <img
              className="card-img-top"
              src="https://dummyimage.com/200x300/000/fff"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">Vino Tinto</h4>
            <h5>$$$</h5>
            <p className="card-text">
              <i class="fa-solid fa-star stars"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
            <Link to="/product">
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
