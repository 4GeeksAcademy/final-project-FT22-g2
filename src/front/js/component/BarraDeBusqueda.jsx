import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
// import Filter from "../component/Filter.jsx";
import Filteredproduct from "../component/FIlteredproduct.jsx"
import Card from "../component/Card.jsx"



const BarraDeBusqueda = ({ searchValue }) => {
    const { store, actions } = useContext(Context);
    const [producto, setProductos] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [search, setSearch] = useState("");

useEffect(() => {
    filtrarData();
}, []);

//funcion para traer los datos desde la api

const URLapi = "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/api/productos";

const filtrarData = async (id, image, nombre, precio, tipo, unitFormat) => {
    const producto = {
        "id": id,
        "image": image,
        "nombre": nombre,
        "precio": precio,
        "tipo": tipo,
        "unitFormat": unitFormat
    };
    try {
        const response = await fetch(URLapi)
        const data = await response.json()
        setProductos(data.result);
        setTipo(data.result);
    } catch (error) {
        console.log(error);
    }
}
//funcion de busqueda

const handleSearch = (e) => {
    setSearch(e.target.value)
}

const productosFiltrados = tipo ? tipo.filter((producto) =>
    producto.nombre.toLowerCase().includes(search.toLocaleLowerCase())
) : [];

return (
    <div className="container-fluid mt-5">
        <div className="row">
            <input
                id="buscadorNavbar"
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                value={search}
                onChange={handleSearch}
            />
        </div>
    </div>
);
};

export default BarraDeBusqueda;
