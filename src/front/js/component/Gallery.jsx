import React from "react";
import ModalImages from "./ModalImages.jsx";



const Gallery = () => {
  return (
    <>
      <div className="container">
        <div class="lightbox">
          <div class="row">
            <div class="col-lg-6">
              <div>
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top py-5 hoverimage"
                    src="https://dummyimage.com/600x300/000/fff"
                    alt="Top Left Image"
                  />
                </button>
              </div>
              <div>
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top hoverimage"
                    src="https://dummyimage.com/600x300/000/fff"
                    alt="Bottom Left Image"
                  />
                </button>
              </div>
            </div>
            <div class="col-lg-6">
              <div>
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top py-5 "
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
