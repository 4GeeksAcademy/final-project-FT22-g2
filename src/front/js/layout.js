import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import PerfilUsuario from "./pages/perfilUsuario.js";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar.jsx";
import Footer from "./component/footer.jsx";
import Carrito from "./pages/carrito.jsx";
import Registro from "./pages/registro.jsx";


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
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<PerfilUsuario />} path="/perfil" />
                        <Route element={<Registro />} path="/registro" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
