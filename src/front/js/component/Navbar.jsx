import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../img/logoElRinconDelVino.png"
import bgHero from "../../img/background-hero.jpeg"

import "../../styles/navbarHero.css";

const Navbar = () => {

	const navStyle = {
		color: "white",
		backgroundColor: "#7B2121",
		fontFamily: "Arial"
	};

	const categoryStyle = {
		backgroundColor: "#671C1C"
	}

	return (
		<nav className="container-navbar" style={navStyle}>
			<div className="d-flex justify-content-between align-items-center">

				{/* ---- / LOGO / ---- */}
				<Link to="/">
					<img className="mx-5" src={logoUrl} width="130px" height="100px" />
				</Link>

				{/* ---- / BARRA Y BOTÓN DE BÚSQUEDA / ---- */}
				<form>
					<input className="input-search-navbar" type="search" placeholder="Buscar..." />
				</form>

				<div className="icons-navbar h2 px-5 d-flex">
					<ul className="navbar-nav" >
						{/* ---- / DROPDOWN CARRITO / ---- */}
						<li className="nav-item dropdown">
							<a className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
								<i className="fa-solid fa-cart-shopping px-3"></i>
							</a>

							<ul className="dropdown-menu" aria-labelledby="navbarDropdown" onClick={(e) => e.stopPropagation()}>
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
														<button type="button" className="button-add-remove-carrito-hover remove-carrito-hover">-</button>
														<label className="label-cantidad-carrito-hover px-2">1</label>
														<button type="button" className="button-add-remove-carrito-hover add-carrito-hover">+</button>
														<p className=" px-2 price-carrito-hover" >40.000</p>
													</div>
												</div>
											</div>
											{/* SUBTOTAL Y BTN IR AL CARRITO */}
											<div className="container-price-button-cart">
												<h4 className="subtotal-carrito-price">Subtotal: $$$</h4>
												<Link to="/carrito" className="d-flex justify-content-center text-decoration-none">
													<button type="button" href="#" className="btn-ir-al-carrito">
														Ir al carrito
													</button>
												</Link>
											</div>
										</div>

									</div>
								</form>

							</ul>
						</li>
					</ul>

					{/* ---- / DROPDOWN LOG-IN - REGISTER / ---- */}
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i className="fa-solid fa-right-to-bracket px-3"></i>
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
								<li><a className="dropdown-item" href="#">Acceder</a></li>
								<li><a className="dropdown-item" href="#">Registrarse</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			{/* ----- / BARRA DE CATEGORÍAS / ----- */}
			<div className="navbar navbar-expand-lg categories-navbar-styles" style={categoryStyle}>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="categories">
						<div className="nav-item dropdown categories-navbar-items">
							{/* PRIMERA CATEGORÍA */}
							<a className="nav-link dropdown-toggle text-white h4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Tipos
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#">Tinto</a></li>
								<li><a className="dropdown-item" href="#">Blanco</a></li>
								<li><a className="dropdown-item" href="#">Rosé</a></li>
								<li><a className="dropdown-item" href="#">Espumante</a></li>
							</ul>
						</div>

						{/* SEGUNDA CATEGORÍA */}
						<div className="nav-item dropdown categories-navbar-items">
							<a className="nav-link dropdown-toggle text-white h4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categorías
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#">Reserva</a></li>
								<li><a className="dropdown-item" href="#">Reserva especial</a></li>
								<li><a className="dropdown-item" href="#">Gran reserva</a></li>
								<li><a className="dropdown-item" href="#">Premium</a></li>
							</ul>
						</div>
						{/* CONTÁCTANOS */}
						<div className="nav-item categories-navbar-items">
							<button type="button" className="btn-contactanos-navbar h4" data-bs-toggle="modal" data-bs-target="#modalContact">
								Contáctanos
							</button>
						</div>

						{/* MODAL */}
						<div className="modal fade" id="modalContact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog modal-xl" id="container-modal-contact">
								<div className="modal-content" id="contenido-modal-contact">
									<div className="modal-body text-dark">
										<div className="row p-3">
											<div className="col-4">
												<img src={bgHero} alt="example" width="100%" height="100%" className="rounded" />
											</div>
											<div className="col-8 container-inputs-contact">
												<div className="row">
													<h1 className="text-center">Contáctenos:</h1>
													<div className="col-6">
														<input className="input-form-contact" type="text" placeholder="Nombre" required />
													</div>
													<div className="col-6">
														<input className="input-form-contact" type="text" placeholder="Apellido" required />
													</div>
												</div>
												<input className="input-form-contact" type="email" placeholder="Email" required />
												<input className="input-form-contact input-form-contact-number" type="number" placeholder="Teléfono" required />
												<textarea className="input-form-contact" name="textareaContact" id="textareaContact" cols="20" rows="4"></textarea>

												<button type="button" className="btn-enviar-formulario-contactanos">Enviar</button>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
									</div>
								</div>
							</div>
						</div>

						{/* REDES SOCIALES */}
						<div className="nav-item categories-navbar-items">
							<a className="nav-link active text-white h4" aria-current="page" href="#" >
								<a href="http://instagram.com" target="_blank" className="text-white">
									<i className="fa-brands fa-instagram"></i>
								</a>
								<a href="http://facebook.com" target="_blank" className="text-white">
									<i className="fa-brands fa-square-facebook px-3"></i>
								</a>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
