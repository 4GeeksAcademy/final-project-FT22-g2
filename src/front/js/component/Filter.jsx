import React from "react";
import "../../styles/filter.css";
const Filter = () => {
    return (
        <>
            <div className="col-1 border bg-secondary">
                <div className="container-fluid gx-0 mt-5">
                    <div className="row">
                        <div className="col-11">
                            <div class="dropdown w">
                                <button class="btn btn-secondary dropdown-toggle w-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;
