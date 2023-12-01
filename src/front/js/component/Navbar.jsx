import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../img/logoElRinconDelVino.png";
import LogIn from "./LogIn.jsx";
import ModalContact from "./ModalContact.jsx";
import RestaurarContraseña from "./ModalRestaurarContraseña.jsx";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from "../store/appContext";
import {NavBarShoppingCart} from "./NavBarShoppingCart.jsx"

import "../../styles/navbarHero.css";

const Navbar = () => {

	const { store, actions } = useContext(Context);

	const navStyle = {
		color: "white",
		backgroundColor: "#7B2121",
		fontFamily: "Arial"
	};

	const categoryStyle = {
		backgroundColor: "#671C1C"
	}

	const token = localStorage.getItem("token");
	console.log("Esto es un console log del navbar", token)

	const handleLogout = () => {
		localStorage.removeItem("token");

		setTimeout(() => {
			window.locate.href("/registro")
			window.location.reload(false)
		}, 2000);
	};

	// Controlar el input de búsqueda por un onChange para capturar cada cambio al escribir
	/*
			EJEMPLO PARA AÑADIR FILTRO + MAP (El filtro sería para buscar por la barra de búsqueda)

		const [search, setSearch] = useState('')

		{data.filter((item) => {
		  return search.toLowerCase() === '' 
		  ? item 
		  : item.first_name.toLoweCase().includes(search) 
		})
		.map((item) => {
		  <card con sus valores asignados>
		  src={item.image}
		  {item.name}
		  {item.price}
		})}

	*/

	return (
		<>
			<div className="text-center">
				<LogIn />
				<ModalContact />
				<RestaurarContraseña />
			</div>

			<nav className="container-navbar navbar navbar-expand-lg" style={navStyle}>
				<div className="container-fluid">

					{/* ---- / LOGO / ---- */}
					<Link to="/">
						<img className="mx-5" src={logoUrl} width="130px" height="100px" />
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
								<Link to="busqueda" className="text-decoration-none">
									<li><a className="dropdown-item" href="#">Tinto</a></li>
								</Link>
								<Link to="busqueda" className="text-decoration-none">
									<li><a className="dropdown-item" href="#">Blanco</a></li>
								</Link>
								<Link to="busqueda" className="text-decoration-none">
									<li><a className="dropdown-item" href="#">Rosé</a></li>
								</Link>
								<Link to="busqueda" className="text-decoration-none">
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
								<Link to="busqueda" className="text-decoration-none">
									<li><a className="dropdown-item" href="#">Reserva</a></li>
								</Link>
								<Link to="busqueda" className="text-decoration-none">
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

					<form class="d-flex">
						<input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
						<button className="btn btn-outline-light" type="submit">Buscar</button>
					</form>

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
											<li>
												<button className="dropdown-item border-bottom" data-bs-toggle="modal" data-bs-target="#modalLogin" type="button">Acceder</button></li>
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
										<a className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											<i class="fa-solid fa-right-to-bracket px-3"></i>
										</a>
										<ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown2">
											<li className="dropdown-item d-flex justify-content-center container-button-perfil-dropdown w-100 border-bottom">
												<button className="button-perfil-dropdown">
													Perfil
												</button>
											</li>
											<li className="dropdown-item">
												<button className="button-cerrar-sesion-dropdown" onClick={handleLogout}>
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