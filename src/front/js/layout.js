import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Search } from "./pages/search";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/footer.jsx";
import Carrito from "./pages/carrito.jsx";
import Registro from "./pages/registro.jsx";
import PerfilUsuario from "./pages/perfilUsuario.js";
import Single from "./pages/single.js";
import Favoritos from "./pages/favoritos.jsx";
import HistorialCompra from "./pages/historialCompra.jsx";

import DetallesPedido from "./pages/DetallesPedido.jsx";
import MetodoDePago from "./pages/metodoDePago.jsx";

import MetodoDePagoRevisar from "./pages/metodoDePagoRevisar.jsx";
import { MetodoPagoProvider } from "./component/ContextPago.jsx";
import { Cloudinary } from "@cloudinary/url-gen";
import Filteredproduct from "./component/FIlteredproduct.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";
import Direccion from "./component/Direccion.jsx";
//create your first component
const Layout = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dipd6csl7' } });

    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <MetodoPagoProvider>
                <BrowserRouter basename={basename}>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>a
                            <Route element={<Home />} path="/" />
                            <Route element={
                                <PrivateRoute>
                                    <Carrito />
                                </PrivateRoute>
                            } path="/carrito" />
                            <Route element={<Single />} path="/producto/:id" />
                            <Route element={
                                <PrivateRoute>
                                    <PerfilUsuario />
                                </PrivateRoute>
                            } path="/perfil" />
                            <Route element={<Registro />} path="/registro" />
                            <Route element={<Search />} path="/busqueda" />
                            <Route element={<Search />} path="/busqueda/:tipo" />
                            <Route element={
                                <PrivateRoute>
                                    <HistorialCompra />
                                </PrivateRoute>
                            } path="/historial-compra" />
                            <Route element={
                                <PrivateRoute>
                                    <MetodoDePago />
                                </PrivateRoute>
                            } path="/metodo-de-pago" />
                            <Route element={
                                <PrivateRoute>
                                    <MetodoDePagoRevisar />
                                </PrivateRoute>
                            } path="/metodo-de-pago/:payment" />
                            <Route element={
                                <PrivateRoute>
                                    <Favoritos />
                                </PrivateRoute>
                            } path="/favoritos" />
                            <Route element={
                                <PrivateRoute>
                                    <DetallesPedido />
                                </PrivateRoute>
                            } path="/detalles-pedido" />
                            <Route element={
                                <PrivateRoute>
                                    <Direccion />
                                </PrivateRoute>
                            } path="/metodo-de-pago/direccion" />
                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                        <Footer />
                    </ScrollToTop>
                </BrowserRouter>
            </MetodoPagoProvider>
        </div>
    );
};

export default injectContext(Layout);
