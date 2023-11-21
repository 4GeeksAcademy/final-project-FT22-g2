import React from "react";

const ModalEliminarCuenta =() =>{
    return(
        <>

<div classname="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div classname="modal-dialog">
    <div classname="modal-content">
      <div classname="modal-header">
        <h5 classname="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div classname="modal-body">
        ...
      </div>
      <div classname="modal-footer">
        <button type="button" classname="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" classname="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
};
export default ModalEliminarCuenta;