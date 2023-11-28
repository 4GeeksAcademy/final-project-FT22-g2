import React from "react";
import ModalImages from "./ModalImages.jsx";

const Gallery = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="lightbox overflow-x-scroll overflow-x-hidden">
          <div className="row gx-0">
            {/* First Column - Top Left and Bottom Left Images */}
            <div className="col-12 col-lg-6 p-2">
              <div className="mb-2"> {/* Added margin bottom for better spacing on small screens */}
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid hoverimage"
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
            
            {/* Second Column - Right Image */}
            <div className="col-12 col-lg-6 p-2">
              <div className="mb-2"> {/* Added margin bottom for better spacing on small screens */}
                <button type="button" className="custom-btn" data-bs-toggle="modal" data-bs-target="#ModalImages">
                  <img
                    className="img-top img-fluid"
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