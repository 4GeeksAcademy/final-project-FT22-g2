import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import Filter from "../component/Filter.jsx";
import Filteredproduct from "../component/FIlteredproduct.jsx"


export const Search = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container">
            <div className="row">
                <div className="col-2"><Filter /></div>
                <div className="col-10"><Filteredproduct /></div>
            </div>
        </div>

    );
};