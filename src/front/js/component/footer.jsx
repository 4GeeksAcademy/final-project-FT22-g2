import React, { Component } from "react";
import logoElRinconDelVino from "../../img/logoElRinconDelVino.jpg";
import webpayLogo from "../../img/webpayLogo.png";
import consumoResponsableLogo from "../../img/consumoResponsableLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";



const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" style={{ backgroundColor: "#7B2121" }}>

		<div className="container-fluid p-2" style={{ maxWidth: "100%", margin: "0" }} >
			<div className="row align-items-start">

				{/* logo */}

				<div className="col-lg-4" align-self-start>
					<img src={logoElRinconDelVino} className="img-fluid rounded" alt="logo" style={{ maxHeight: "350px" }} />
				</div>

				{/* Corporativo */}

				<div className="col-lg-4 p-3" >
					<h6 style={{ color: "white" }}>Corporativo</h6>
					<ul style={{ listStyleType: "none", padding: 0, color: "white" }}>
						<li><a href="#" style={{ color: "white", textDecoration: "none" }}>Términos y condiciones</a></li>
						<li><a href="#" style={{ color: "white", textDecoration: "none" }}>Políticas de despacho</a></li>
						<li><a href="#" style={{ color: "white", textDecoration: "none" }}>Cambios y devoluciones</a></li>
					</ul>

					{/* Contactanos */}

					<div className="mt-5 p-4">
						<h6 style={{ color: "white" }}>Contáctanos</h6>
						<p><a href="mailto:elrincondelvino@gmail.com" style={{ color: "white", textDecoration: "none" }}>elrincondelvino@gmail.com</a></p>


						{/* Íconos de redes sociales */}

						<FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: "white", marginLeft: "10px" }} />
						<FontAwesomeIcon icon={faFacebookSquare} size="3x" style={{ color: "white", marginLeft: "10px" }} />

					</div>
				</div>

				{/* Medios de pago */}

				<div className="col-lg-4 p-3">
					<h6 style={{ color: "white" }}>Medios de pago</h6>
					<div className="row">
						<div className="col-lg-12 mb-3">
							<img src={webpayLogo} style={{ width: "50%" }} alt="logo tarjeta visa" />
						</div>

						{/* Consumo Responsable */}

						<div className="col-md-12 d-flex flex-column align-items-center mt-4">
							<img src={consumoResponsableLogo} style={{ width: "49%", marginBottom: "15px"}} alt="logo consumo responsable" />
							<p style={{ color: "white", marginBottom: "5px" }}>#SiBebesNoConduzcas</p>
							<p style={{ color: "white" }}>#PasaLasLlaves</p>
						</div>
					</div>
				</div>

			</div>

		</div>
	</footer>
);

export default Footer
