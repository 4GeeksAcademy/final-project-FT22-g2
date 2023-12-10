import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BarraDeBusqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/busqueda?q=${busqueda}`);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </form>
    </div>
  );
};

export default BarraDeBusqueda;

