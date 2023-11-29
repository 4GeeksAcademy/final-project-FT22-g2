import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
// import Filter from "../component/Filter.jsx";
import Filteredproduct from "../component/FIlteredproduct.jsx"


export const Search = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container-fluid mt-5">
            <div className="row">
                {/* <Filter /> */}
                <Filteredproduct />
            </div>
        </div>

    );
};