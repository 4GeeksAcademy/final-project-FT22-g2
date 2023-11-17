import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="container">
        <div class="lightbox">
          <div class="row">
            <div class="col-lg-6">
              <a href="">
                <img
                  className="img-top py-5 hoverimage"
                  src="https://dummyimage.com/600x300/000/fff"
                  alt="Top Left Image"
                />
              </a>
              <a href="">
                <img
                  className="img-top hoverimage"
                  src="https://dummyimage.com/600x300/000/fff"
                  alt="Bottom Left Image"
                />
              </a>
            </div>
            <div class="col-lg-6">
              <a href="">
                <img
                  className="img-top py-5 "
                  src="https://dummyimage.com/600x650/000/fff"
                  alt="Right Image"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
