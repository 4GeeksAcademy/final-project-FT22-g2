import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Search } from "./pages/search";
import injectContext from "./store/appContext";
import CambiarDireccion from "./pages/cambiarDireccion.jsx";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/footer.jsx";
import Carrito from "./pages/carrito.jsx";
import Registro from "./pages/registro.jsx";
import PerfilUsuario from "./pages/perfilUsuario.js";
import Single from "./pages/single.js";
import Favoritos from "./pages/favoritos.jsx";
import HistorialCompra from "./pages/historialCompra.jsx";
import DetallesPedido from "./pages/detallesPedido.jsx";
import MetodoDePago from "./pages/metodoDePago.jsx";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Carrito />} path="/carrito" />
                        <Route element={<Single />} path="/producto" />
                        <Route element={<PerfilUsuario />} path="/perfil" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<Search />} path="/busqueda" />
                        <Route element={<CambiarDireccion />} path="/cambiar-direccion" />
                        <Route element={<HistorialCompra />} path="/historial-compra" />
                        <Route element={<MetodoDePago />} path="/metodo-de-pago" />
                        <Route element={<Favoritos />} path="/favoritos" />
                        <Route element={<DetallesPedido />} path="/detalles-pedido" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
