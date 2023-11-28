import React from "react";
import ModalImages from "./ModalImages.jsx";

const Gallery = () => {
  return (
    <>
      <div className="container-fluid container-lg text-center">
        <div className="lightbox">
          <div className="row gx-0">
            <div className="col-lg-6 p-2">
              <div className="align-content-end gx-0"> 
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid py-5 hoverimage"
                    src="https://dummyimage.com/600x300/000/fff"
                    alt="Top Left Image"
                  />
                </button>
              </div>
              <div>
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                <img
                  className="img-top img-fluid hoverimage"
                  src="https://dummyimage.com/600x300/000/fff"
                  alt="Bottom Left Image"
                />
                </button>
              </div>
            </div>
            <div className=" p-2 col-lg-6">
            <div>
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                <img
                  className="img-top img-fluid py-5 "
                  src="https://dummyimage.com/600x650/000/fff"
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
