import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoUrl from "../../img/logoElRinconDelVino.png";
import LogIn from "./LogIn.jsx";
import ModalContact from "./ModalContact.jsx";
import RestaurarContraseña from "./ModalRestaurarContraseña.jsx";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from "../store/appContext";
import { NavBarShoppingCart } from "./NavBarShoppingCart.jsx"
import { CardContainer16 } from "./Card.jsx";
import BarraDeBusqueda from "./BarraDeBusqueda.jsx";
import ModalCerrarSesion from "./ModalCerrarSesion.jsx";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [tipo, setTipo] = useState(null);
	const [categoria, setCategoria] = useState(null);
	const token = localStorage.getItem("token");
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user_id");
		localStorage.removeItem("shoppingCart");
		setTimeout(() => {
			navigate("registro");
		}, 2000);

		setTimeout(() => {
			window.location.reload(false);
		}, 2001);
	};

	const handleSearch = (busqueda) => {
		setTimeout(() => {
			window.location.href = process.env.BASENAME + `busqueda?q=${busqueda}`
		}, 10);

	};

	return (
		<>
			<div className="text-center">
				<LogIn />
				<ModalContact />
				<RestaurarContraseña />
				<ModalCerrarSesion />
			</div>

			<nav className="container-navbar navbar navbar-expand-lg" style={{ color: "white", backgroundColor: "#7B2121", fontFamily: "Arial", overflowY: "" }}>
				<div className="container-fluid">

					{/* ---- / LOGO / ---- */}
					<Link to="/">
						<img className="mx-5" src={logoUrl} width="130px" height="100px" />
					</Link>

					{/* REDES SOCIALES */}
					<div className="nav-item categories-navbar-items nav-link active text-white h4 flex-end" aria-current="page">
						<a href="http://instagram.com" target="_blank" className="text-white">
							<i className="fa-brands fa-instagram"></i>
						</a>
						<a href="http://facebook.com" target="_blank" className="text-white">
							<i className="fa-brands fa-square-facebook px-3"></i>
						</a>
					</div>

					<button className="navbar-toggler navbar-toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation" style={{ color: "white", backgroundColor: "#7B2121" }}>
						<span className="navbar-toggler-icon"><FontAwesomeIcon icon={faCaretDown} size="2x" /></span>
					</button>

					{/* Contenido colapsable */}
					<div className="collapse navbar-collapse" id="navbarSupportedContent">

						<div className="nav-item dropdown categories-navbar-items">
							{/* ----- / BARRA DE CATEGORÍAS / ----- */}

							{/* PRIMERA CATEGORÍA */}
							<Link className="nav-link dropdown-toggle text-white h4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Tipos
							</Link>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link to="/busqueda?q=tinto" className="text-decoration-none" onClick={() => { handleSearch("tinto"); }}>
									<li><a className="dropdown-item" href="#">Tinto</a></li>
								</Link>
								<Link to="/busqueda?q=blanco" className="text-decoration-none" onClick={() => { handleSearch("blanco"); }}>
									<li><a className="dropdown-item" href="#">Blanco</a></li>
								</Link>
								<Link to="/busqueda?q=rosé" className="text-decoration-none" onClick={() => { handleSearch("rosé"); }}>
									<li><a className="dropdown-item" href="#">Rosé</a></li>
								</Link>
								<Link to="/busqueda?q=espumante" className="text-decoration-none" onClick={() => { handleSearch("espumante"); }}>
									<li><a className="dropdown-item" href="#">Espumante</a></li>
								</Link>
							</ul>
						</div>

						{/* SEGUNDA CATEGORÍA */}
						<div className="navbar-expand-lg nav-item dropdown categories-navbar-items">
							<Link className="nav-link dropdown-toggle text-white h4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categorías
							</Link>
							<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
								<Link to="/busqueda?q=reserva" className="text-decoration-none" onClick={() => { handleSearch("reserva"); }}>
									<li><a className="dropdown-item" href="#">Reserva</a></li>
								</Link>
								<Link to="/busqueda?q=gran-reserva" className="text-decoration-none" onClick={() => { handleSearch("gran reserva"); }}>
									<li><a className="dropdown-item" href="#">Gran reserva</a></li>
								</Link>
							</ul>
						</div>

						{/* CONTÁCTANOS */}
						<div className="nav-item categories-navbar-items">
							<button type="button" className="btn-contactanos-navbar h4" data-bs-toggle="modal" data-bs-target="#ModalContact">
								Contáctanos
							</button>
						</div>

					</div> {/* termina el collapse */}

					{/* ---- / BARRA Y BOTÓN DE BÚSQUEDA / ---- */}
					<div className="container-busqueda-formulario-navbar">
						<BarraDeBusqueda />
					</div>

					{/* empiezan los logos del carrito y loggin */}
					<div className="icons-navbar h2 px-1 m-auto d-flex ms-auto flex-start">
						<NavBarShoppingCart tipo={tipo} categoria={categoria} />
						{/* ---- / DROPDOWN LOG-IN - REGISTER / ---- */}
						{token == null ? (
							<>
								<ul className="navbar-nav">
									<li className="nav-item dropstart">
										<Link className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fa-solid fa-right-to-bracket px-3"></i>
										</Link>
										<ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown2">
											<li>
												<button className="dropdown-item border-bottom" data-bs-toggle="modal" data-bs-target="#modalLogin" type="button">Acceder</button>
											</li>
											<li>
												<Link to="/registro" className="text-decoration-none">
													<a className="dropdown-item" href="#">Registrarse</a>
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</>
						) : (
							<>
								<ul className="navbar-nav">
									<li className="nav-item dropstart">
										<Link className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i className="fa-solid fa-right-from-bracket px-3"></i>
										</Link>
										<ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown2">
											<li className="dropdown-item d-flex justify-content-center container-button-perfil-dropdown w-100 border-bottom">
												<Link to="/perfil" className="button-perfil-dropdown">
													Perfil
												</Link>
											</li>
											<li className="dropdown-item">
												<button data-bs-toggle="modal" data-bs-target="#modalCerrarSesion" className="button-cerrar-sesion-dropdown" onClick={handleLogout}>
													Cerrar sesión
												</button>
											</li>
										</ul>
									</li>
								</ul>
							</>
						)}
					</div>
					{/* terminan los logos del carrito y loggin */}
				</div>
			</nav>


		</>
	);
};

export default Navbar;
