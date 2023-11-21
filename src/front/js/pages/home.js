import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Gallery from "../component/Gallery.jsx";
import Containercardshome from "../component/Containercardshome.jsx";
import ModalImages from "../component/ModalImages.jsx";
import Hero from "../component/Hero.jsx";
import ModalRestaurarContraseña from "../component/ModalRestaurarContraseña.jsx"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<Hero />
			<div className="mt-5">
				<Containercardshome />
				<Gallery />
				<ModalImages />
				<ModalRestaurarContraseña />
			</div>
		</div>
	);
};
