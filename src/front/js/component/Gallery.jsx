import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="container">
      <div class="lightbox">
  <div class="row">
    <div class="col-lg-6">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
        alt="Table Full of Spices"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
      />
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
        alt="Coconut with Strawberries"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
        alt="Dark Roast Iced Coffee"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default Gallery;
