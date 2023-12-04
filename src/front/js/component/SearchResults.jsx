import React, { useContext } from "react";
import { Context } from "../store/appContext";

const SearchResults = () => {

    const { store } = useContext(Context);

    return (
        <ul>
            {store.productosFiltrados.map((producto, index) => (
                <li key={index}>{producto.nombre}</li>
            ))}
        </ul>
    )
}

export default SearchResults;