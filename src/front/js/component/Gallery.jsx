import React from "react";
import ModalImages from "./ModalImages.jsx";

const Gallery = () => {
  return (
    <>
    
      <div className="container-fluid text-center image-container">
        <div className="lightbox overflow-x-scroll overflow-x-hidden">
          <div className="row justify-content-center">

            <div className="col-10  col-lg-5 p-2 mb-3 d-flex flex-column align-items-end">
              <div className="mb-2"> 
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid hoverimage"
                    src="https://dummyimage.com/620x300/000/fff"
                    alt="Top Left Image"
                  />
                </button>
              </div>
              <div className="mt-2">
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid hoverimage"
                    src="https://dummyimage.com/620x300/000/fff"
                    alt="Bottom Left Image"
                  />
                </button>
              </div>
            </div>
            
            <div className="col-10 col-lg-5 p-2 mb-3 d-flex flex-column align-items-start">
              <div className="mb-2"> 
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid"
                    src="https://dummyimage.com/620x620/000/fff"
                    alt="Right Image"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
