import React, { useState } from 'react';
import LocalStorageCarrito from '../component/localStorageCarrito.jsx';
import rigoBaby from '../../img/rigo-baby.jpg'
import "../../styles/carrito.css";
import { Link } from 'react-router-dom';

const Carrito = () => {
  const [productos, setProductos] = useState([
    // ... productos iniciales
    { price: 5990, cantidad: 1 }, { price: 36790, cantidad: 1 }, { price: 14870, cantidad: 1 }, { price: 16980, cantidad: 1 } //ejemplos provisorios
  ]);

  const deleteProduct = (index) => {
    // Copia el array de productos y elimina el producto en el índice especificado
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos); // Actualiza el estado con la nueva lista de productos
  };

  const incrementarCantidad = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].cantidad++;
    setProductos(nuevosProductos);
  };

  const decrementarCantidad = (index) => {
    const nuevosProductos = [...productos];
    if (nuevosProductos[index].cantidad > 1) {
      nuevosProductos[index].cantidad--;
      setProductos(nuevosProductos);
    }
  };

  return (
    <div className="container-card-vista-carrito">
      <div className='container contenedor-vista-carrito my-4'>
        <div className="row">
          <h2>${parseFloat(productos.price * productos.cantidad).toFixed(2)}</h2>
          <h2 className='col-lg-3 col-md-4 col-sm-6 vista-carrito-categories'>Item</h2>
          <h2 className='col-lg-6 col-md-4 col-sm-6 vista-carrito-categories'>Cantidad</h2>
          <h2 className='col-lg-3 col-md-4 col-sm-12 vista-carrito-categories-valor'>Valor</h2>
          <LocalStorageCarrito />
        </div>
        {productos.map((producto, index) => (
          <div key={index}>

            <div className="row fila-vista-carrito">
              <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                <img src={rigoBaby} alt="rigo" className='img-producto-vista-carrito' />
              </div>
              <div className="col-lg-6 col-md-4 col-sm-6 d-flex justify-content-center">
                {/* BOTON AÑADIR Y QUITAR + PRECIO REUTILIZADO */}
                <div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
                  <button onClick={() => decrementarCantidad(index)} type='button' className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
                  <label className="label-cantidad-carrito-hover px-2">{producto.cantidad}</label>
                  <button onClick={() => incrementarCantidad(index)} type='button' className="button-add-remove-carrito-hover add-carrito-hover">+</button>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 columna-vista-carrito-valor columna-vista-carrito-precio-articulo">
                <h2>${producto.price * producto.cantidad}</h2>
              </div>
              <button onClick={() => deleteProduct(index)} className="col-1 columna-vista-carrito-valor icon-eliminar-producto-carrito"><i className="icon-hover-eliminar-producto fa-regular fa-trash-can"></i></button>
            </div>
          </div>
        ))}

        <div className="row fila-vista-carrito-separador"></div>

        <div className="row">
          <h2 className='col-lg-5 col-md-6 col-sm-6 vista-carrito-categories'></h2>
          <h2 className='col-lg-4 col-md-6 col-sm-6 vista-carrito-categories'></h2>
          <div className="col-lg-3 col-md-12 col-sm-12 vista-carrito-categories-valor">
            <div className="row">
              <div className="col-6 text-end">
                <h5>Subtotal</h5>
              </div>
              <div className="col-6 ps-2">
                <h5>${productos.reduce((total, prod) => total + prod.price * prod.cantidad, 0)}</h5>
              </div>
              <div className="col-6 text-end">
                <h4>Total</h4>
              </div>
              <div className="col-6 ps-2">
                <h5>${productos.reduce((total, prod) => total + prod.price * prod.cantidad, 0)}</h5>
              </div>
              <Link to="/detalles-pedido" type="button" href="#" className="col-12 btn-confirmar-pedido-carrito text-decoration-none text-center">
                Confirmar
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Carrito;