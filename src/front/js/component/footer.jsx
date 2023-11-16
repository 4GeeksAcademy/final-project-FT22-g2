import React, { Component } from "react";
import logoElRinconDelVino from "../../img/logoElRinconDelVino.jpg";


const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">

		<div className="container p-2" style={{ backgroundColor: "#7B2121", height: "250px" }} >
			<div className="row">
				{/* logo */}
				<div className="col-lg-4" img-lg-start>
					<img src="../../img/logoElRinconDelVino" className="img-fluid rounded" alt="logo" />
				</div>
				{/* Corporativo */}
				<div className="col-lg-4" >
					<h5>Corporativo</h5>
					<ul style={{ listStyleType: "none", padding: 0 }}>
						<li>Términos y condiciones</li>
						<li>Politicas de despacho</li>
						<li>Cambios y devoluciones</li>
					</ul>
				</div>
				{/* Contactanos */}
				<div className="col-lg-4">
					<h6>Contáctanos</h6>
					<p>elrincondelvino@gmail.com</p>
					<img src="..." alt="logo instagram" />
					<img src="..." alt="logo facebook" />
				</div>
				
				{/* Medios de pago */}
				<div className="col-lg-4 ">
					<h5>Medios de pago</h5>
					<img src="..." alt="logo tarjetas"/>
					<img src="..." alt="logo consumo responsable"/>
					<p><strong>#SiBebesNoConduzcas</strong></p>
					<p><strong>#PasaLasLlaves</strong></p>
				</div>

			</div>

		</div>
	</footer>
);

export default Footer
