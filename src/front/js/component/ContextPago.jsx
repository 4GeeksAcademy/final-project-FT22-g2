import React,{ createContext, useState, useContext } from "react";

export const MetodoPagoContext = createContext(null);

export const MetodoPagoProvider = ({ children }) => {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState("");

    const seleccionarMetodo = (metodo) => {
        setMetodoSeleccionado(metodo);
    };

    return (
        <MetodoPagoContext.Provider value={{ metodoSeleccionado, seleccionarMetodo }}>
            {children}
        </MetodoPagoContext.Provider>
    );
};

export const useMetodoPago = () => {
    const context = useContext(MetodoPagoContext);
    //if (!context) {
       // throw new Error("Debes seleccionar un metodo de pago");
   // }
    return context;
};
