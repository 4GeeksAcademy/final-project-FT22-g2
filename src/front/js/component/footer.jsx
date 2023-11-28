import React, { Component } from "react";

import "../../styles/footer.css";


import logoElRinconDelVino from "../../img/logoElRinconDelVino.png";
import webpayLogo from "../../img/webpayLogo.png";
import consumoResponsableLogo from "../../img/consumoResponsableLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";




const Footer = () => (
	<footer className="footer mt-auto py-3 text-center" >

		<div className="container-fluid p-2 " >
			<div className="row align-items-start">

				{/* logo */}

				<div className="col-lg-4" align-self-start d-flex flex-column align-items-center>
					<img src={logoElRinconDelVino} className="img-fluid rounded" alt="logo" />

					{/* Enlaces a GitHub */}

					<div className="github-links">
						<a href="https://github.com/sm-nat" target="_blank" rel="GH Natalia" >
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
						<a href="https://github.com/Dageti" target="_blank" rel="GH Matias">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
						<a href="https://github.com/JorgeOteiza" target="_blank" rel="GH Jorge">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
						<a href="https://github.com/Demian-Sotomayor" target="_blank" rel="GH Demian" >
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
					</div>
				</div>

				{/* Corporativo */}

				<div className="col-lg-4 p-3" >
					<h6>Corporativo</h6>
					<ul>
						<li><a href="#" style={{ textDecoration: "none" }}>Términos y condiciones</a></li>
						<li><a href="#" style={{ textDecoration: "none" }}>Políticas de despacho</a></li>
					</ul>

					{/* Contactanos */}

					<div className="mt-5 p-4">
						<h6 >Contáctanos</h6>
						<p><a href="mailto:elrincondelvino@gmail.com" style={{ textDecoration: "none" }} >elrincondelvino@gmail.com</a></p>


						{/* Íconos de redes sociales */}

						<a href="https://www.instagram.com/" target="_blank" className="social-icon">
							<FontAwesomeIcon icon={faInstagram} size="3x" />
						</a>
						<a href="https://es-la.facebook.com/" target="_blank" className="social-icon">
							<FontAwesomeIcon icon={faFacebookSquare} size="3x" />
						</a>

					</div>
				</div>

				{/* Medios de pago */}

				<div className="col-lg-4 p-3">
					<h6 >Medios de pago</h6>
					<div className="row">
						<div className="col-lg-12 mb-3">
							<img src={webpayLogo} style={{ width: "50%" }} alt="logo webpay" />
						</div>

						{/* Consumo Responsable */}

						<div className="consumoResponsable col-md-12 d-flex flex-column align-items-center mt-4">
							<img src={consumoResponsableLogo} alt="logo consumo responsable" />
							<p>#SiBebesNoConduzcas</p>
							<p>#PasaLasLlaves</p>
						</div>
					</div>
				</div>

			</div>

		</div>
	</footer>
);

export default Footer
