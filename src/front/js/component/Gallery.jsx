import React from "react";
import ModalImages from "./ModalImages.jsx";
import wineMissing620 from "../../img/wine-620x620.png"
import wineMissing300 from "../../img/wine-620x300.png"

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
                    src={wineMissing300}
                    alt="Top Left Image"
                    width="620px"
                    height="300px"
                  />
                </button>
              </div>
              <div className="mt-2">
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid hoverimage"
                    src={wineMissing300}
                    alt="Bottom Left Image"
                    width="620px"
                    height="300px"
                  />
                </button>
              </div>
            </div>

            <div className="col-10 col-lg-5 p-2 mb-3 d-flex flex-column align-items-start">
              <div className="mb-2">
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid"
                    src={wineMissing620}
                    alt="Right Image"
                    width="620px"
                    height="620px"
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
