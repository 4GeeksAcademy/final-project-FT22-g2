import React from "react";

const Card = () => {
  return (
    <>
      <div className="col-3 my-5 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="m-5">
            <img
              className="card-img-top"
              src="https://dummyimage.com/200x300/000/fff"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Vino Tinto</h5>
            <p className="card-text">
              <i class="fa-solid fa-star stars"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>
            <a href="#" className="btn btn-light">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
