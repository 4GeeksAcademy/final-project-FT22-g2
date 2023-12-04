import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../img/logoElRinconDelVino.png";
import LogIn from "./LogIn.jsx";
import ModalContact from "./ModalContact.jsx";
import RestaurarContraseña from "./ModalRestaurarContraseña.jsx";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardContainer16, CardFilterCategoria } from "./Card.jsx";
import { Context } from "../store/appContext";
import { NavBarShoppingCart } from "./NavBarShoppingCart.jsx"

import "../../styles/navbarHero.css";
import ModalCerrarSesion from "./ModalCerrarSesion.jsx";
import BarraDeBusqueda from "./BarraDeBusqueda.jsx";
import SearchResults from "./SearchResults.jsx";

const Navbar = () => {

	const { store, actions } = useContext(Context);

	const [tipo, setTipo] = useState(null);
	const [categoria, setCategoria] = useState(null);

	const [searchValue, setSearchValue] = useState("");

	const navStyle = {
		color: "white",
		backgroundColor: "#7B2121",
		fontFamily: "Arial",
		overflowY: ""
	};

	const categoryStyle = {
		backgroundColor: "#671C1C"
	}




	const token = localStorage.getItem("token");

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user_id");
		localStorage.removeItem("shoppingCart");
		setTimeout(() => {
			window.location.href = "https://didactic-happiness-7qx694qjp792xjqj-3000.app.github.dev/registro"
		}, 2000);
	};

	// Hagan como que esta sección no existe por favor, de que sirve, sirve XD
	const handleTinto = () => {
		setTipo(null)
		setCategoria(null)
		setTipo("tinto")
	}

	const handleBlanco = () => {
		setTipo(null)
		setCategoria(null)
		setTipo("blanco")
	}

	const handleRose = () => {
		setTipo(null)
		setCategoria(null)
		setTipo("rose")
	}

	const handleEspumante = () => {
		setTipo(null)
		setCategoria(null)
		setTipo("espumante")
	}

	const handleReserva = () => {
		setTipo(null)
		setCategoria(null)
		setCategoria("reserva")
	}

	const handleGranReserva = () => {
		setTipo(null)
		setCategoria(null)
		setCategoria("gran reserva")
	}

	const handleResetCategories = () => {
		setTipo(null)
		setCategoria(null)
	}

	return (
		<>
			<div className="text-center">
				<LogIn />
				<ModalContact />
				<RestaurarContraseña />
				<ModalCerrarSesion />
			</div>

			<nav className="container-navbar navbar navbar-expand-lg" style={navStyle}>
				<div className="container-fluid">

					{/* ---- / LOGO / ---- */}
					<Link to="/">
						<img className="mx-5" src={logoUrl} width="130px" height="100px" onClick={handleResetCategories} />
					</Link>


					{/* REDES SOCIALES */}
					<div className="nav-item categories-navbar-items nav-link active text-white h4 flex-end" aria-current="page">
						<a href="http://instagram.com" target="_blank" className="text-white">
							<i className="fa-brands fa-instagram"></i>
							<a href="http://facebook.com" target="_blank" className="text-white">
								<i className="fa-brands fa-square-facebook px-3"></i>
							</a>
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
							<a className="nav-link dropdown-toggle text-white h4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Tipos
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link to="busqueda/tinto" className="text-decoration-none" onClick={handleTinto}>
									<li><a className="dropdown-item" href="#">Tinto</a></li>
								</Link>
								<Link to="busqueda/blanco" className="text-decoration-none" onClick={handleBlanco}>
									<li><a className="dropdown-item" href="#">Blanco</a></li>
								</Link>
								<Link to="busqueda/rose" className="text-decoration-none" onClick={handleRose}>
									<li><a className="dropdown-item" href="#">Rosé</a></li>
								</Link>
								<Link to="busqueda/espumante" className="text-decoration-none" onClick={handleEspumante}>
									<li><a className="dropdown-item" href="#">Espumante</a></li>
								</Link>
							</ul>
						</div>

						{/* SEGUNDA CATEGORÍA */}
						<div className="navbar-expand-lg nav-item dropdown categories-navbar-items">
							<a className="nav-link dropdown-toggle text-white h4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categorías
							</a>
							<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
								<Link to="busqueda/reserva" className="text-decoration-none" onClick={handleReserva}>
									<li><a className="dropdown-item" href="#">Reserva</a></li>
								</Link>
								<Link to="busqueda/gran-reserva" className="text-decoration-none" onClick={handleGranReserva}>
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

						<form class="d-flex scrollable-form nav-item formulario-barra-de-busqueda-navbar" onChange={handleResetCategories} style={{ overflow: "auto" }}
							onSubmit={(e) => {
								e.preventDefault(); // Evitar la recarga de la página al enviar el formulario
								handleSearch(); // Llama a la función de filtrado
							}}>
							<BarraDeBusqueda />
							<button style={{ overflow: "auto" }} className="btn btn-outline-light w-50 button-enviar-barra-busqueda" type="submit" onClick={actions.productosFiltrados}>Buscar</button>
						</form>
					</div>





					{/* empiezan los logos del carrito y loggin */}
					<div className="icons-navbar h2 px-1 m-auto d-flex ms-auto flex-start">
						<NavBarShoppingCart />
						{/* ---- / DROPDOWN LOG-IN - REGISTER / ---- */}
						{token == null ? (
							<>
								<ul className="navbar-nav">
									<li className="nav-item dropstart">
										<a className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i class="fa-solid fa-right-to-bracket px-3"></i>
										</a>
										<ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown2">
											<li onClick={handleResetCategories}>
												<button className="dropdown-item border-bottom" data-bs-toggle="modal" data-bs-target="#modalLogin" type="button">Acceder</button>
											</li>
											<li onClick={handleResetCategories}>

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
										<a className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i class="fa-solid fa-right-from-bracket px-3"></i>
										</a>
										<ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown2">
											<li className="dropdown-item d-flex justify-content-center container-button-perfil-dropdown w-100 border-bottom">
												<Link to="/perfil" className="button-perfil-dropdown" onClick={handleResetCategories}>
													Perfil
												</Link>
											</li>
											<li className="dropdown-item" onClick={handleResetCategories}>
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

			{/* FILTRADO DE PRODUCTOS INTEGRADO */}
			{tipo == null ? (
				<>

				</>
			) : (
				<div className="col-12 mx-auto mt-5">
					<div className="row justify-content-center align-self-center">
						<div className="col12 text-end  orderbar-color px-0">
							<div className="btn-group">
								<button
									type="button"
									className="btn text-end orderbar-color filter-custom-height custom-text-bar dropdown-toggle d-flex align-items-center me-3"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Ordenar por
								</button>
								<ul className="dropdown-menu dropdown-menu-end">
									<li><button className="dropdown-item" type="button">Próximamente</button></li>
									{/* <li><button className="dropdown-item" type="button">Menor a mayor precio</button></li>
                                <li><button className="dropdown-item" type="button">A - Z</button></li>
                                <li><button className="dropdown-item" type="button">Z - A</button></li> */}
								</ul>
							</div>
							<div className="container-fluid  background-filteredproduct-color custom-text-filterproduct ">
								<div className="row justify-content-center align-self-center">
									<CardContainer16 tipo={tipo} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{categoria == null ? (
				<>

				</>
			) : (
				<div className="col-12 mx-auto mt-5">
					<div className="row justify-content-center align-self-center">
						<div className="col12 text-end  orderbar-color px-0">
							<div className="btn-group">
								<button
									type="button"
									className="btn text-end orderbar-color filter-custom-height custom-text-bar dropdown-toggle d-flex align-items-center me-3"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Ordenar por
								</button>
								<ul className="dropdown-menu dropdown-menu-end">
									<li><button className="dropdown-item" type="button">Próximamente</button></li>
									{/* <li><button className="dropdown-item" type="button">Menor a mayor precio</button></li>
                                <li><button className="dropdown-item" type="button">A - Z</button></li>
                                <li><button className="dropdown-item" type="button">Z - A</button></li> */}
								</ul>
							</div>
							<div className="container-fluid  background-filteredproduct-color custom-text-filterproduct ">
								<div className="row justify-content-center align-self-center">
									<CardFilterCategoria categoria={categoria} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}



		</>

	);
};

export default Navbar;