import React, { useState } from "react";
import MetodoDePago from "../pages/metodoDePago";
import MetodoDePagoRevisar from "../pages/metodoDePagoRevisar";

const ProcesoDeCompra = () => {
    const [metodoPagoSeleccionado, setMetodoPagoSeleccionado] = useState(null);

    const handleMetodoPagoSeleccionado = (metodoSeleccionado) => {
        setMetodoPagoSeleccionado(metodoSeleccionado);
    };
    return (
        <div>
        {metodoPagoSeleccionado ? (
          <MetodoDePagoRevisar metodoSeleccionado={metodoPagoSeleccionado} />
        ) : (
          <MetodoDePago onMetodoPagoSeleccionado={handleMetodoPagoSeleccionado} />
        )}
      </div>
      
    );
};

export default ProcesoDeCompra;