import React from "react";

const Card = () => {
  return (
    <>
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://dummyimage.com/300x400/000/fff"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

    </>
  );
};

export default Card;
