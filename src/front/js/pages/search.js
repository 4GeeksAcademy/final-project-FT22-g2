import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import Filter from "../component/Filter.jsx";
import Filteredproduct from "../component/FIlteredproduct.jsx"


export const Search = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container-fluid">
            <div className="row gx-0">
                <Filter/>
               <Filteredproduct/>
            </div>
        </div>

    );
};