import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../img/logoElRinconDelVino.png";
import LogIn from "./LogIn.jsx";
import ModalContact from "./ModalContact.jsx";
import RestaurarContraseña from "./ModalRestaurarContraseña.jsx";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from "../store/appContext";


import "../../styles/navbarHero.css";
import ModalCerrarSesion from "./ModalCerrarSesion.jsx";

import BarraDeBusqueda from "./BarraDeBusqueda.jsx";

const Navbar = () => {


	const navStyle = {
		color: "white",
		backgroundColor: "#7B2121",
		fontFamily: "Arial"
	};

	const categoryStyle = {
		backgroundColor: "#671C1C"
	}

	const { store, actions } = useContext(Context);


	const token = localStorage.getItem("token");

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user_id");
		setTimeout(() => {
			window.location.href = "https://didactic-happiness-7qx694qjp792xjqj-3000.app.github.dev/registro"
		}, 2000);
	};

	const [searchValue, setSearchValue] = useState("");
	

	

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
					<BarraDeBusqueda searchValue={searchValue} />					
					<button className="btn btn-outline-light" type="button" onClick={actions.productosFiltrados}>Buscar</button> 
					</form>
					




					{/* empiezan los logos del carrito y loggin */}
					<div className="icons-navbar h2 px-1 m-auto d-flex ms-auto flex-start">
						<ul className="navbar-nav">
							{/* ---- / DROPDOWN CARRITO / ---- */}
							<li className="nav-item dropstart">
								<a className="nav-link dropdown text-white" id="navbarDropdown" type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
									<i class="fa-solid fa-cart-shopping px-3"></i>
								</a>

								<ul className="dropdown-menu dropdown-menu-start contenedor-dropdown-menu-carrito-collapse" aria-labelledby="navbarDropdown">
									<form action="">

										<div className="p-3">
											{/* CONTENIDO DE PRODUCTOS CARRITO */}
											<div className="contenedor-carrito-hover">
												{/* PRODUCT EXAMPLE CARRITO */}
												<div className="product-example-carrito-hover text-nowrap d-flex m-3 px-3">
													<div className="product-image m-2">
														<img src={logoUrl} alt="example" width="100px" height="100px" className="border" />
													</div>
													{/* INFORMACIÓN DE PRODUCTO */}
													<div className="product-info-carrito-hover m-3 px-3">
														<h5>Botella de vino</h5>
														<p>1 unidad</p>
														{/* BOTON AÑADIR Y QUITAR + PRECIO */}
														<div className="product-price-carrito-hover d-inline-flex align-items-center justify-content-between">
															{/* <button type="button" className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
															<label className="label-cantidad-carrito-hover px-2">1</label>
															<button type="button" className="button-add-remove-carrito-hover add-carrito-hover">+</button> */}
															<p className=" px-2 price-carrito-hover" >40.000</p>
														</div>
													</div>
												</div>
												{/* SUBTOTAL Y BTN IR AL CARRITO */}
												<div className="container-price-button-cart">
													<h4 className="subtotal-carrito-price">Subtotal: $$$</h4>
													{token == null ? (
														<>
															<Link to="/registro" className="d-flex justify-content-center text-decoration-none">
																<button type="button" href="#" className="btn-ir-al-carrito">
																	Ir al carrito
																</button>
															</Link>
														</>
													) : (
														<>
															<Link to="/carrito" className="d-flex justify-content-center text-decoration-none">
																<button type="button" href="#" className="btn-ir-al-carrito">
																	Ir al carrito
																</button>
															</Link>
														</>
													)}

												</div>
											</div>

										</div>
									</form>

								</ul>
							</li>
						</ul>

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
											<i class="fa-solid fa-right-from-bracket px-3"></i>
										</a>
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