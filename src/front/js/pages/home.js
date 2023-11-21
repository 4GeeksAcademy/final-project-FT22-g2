import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Gallery from "../component/Gallery.jsx";
import Containercardshome from "../component/Containercardshome.jsx";
import ModalImages from "../component/ModalImages.jsx";
import Hero from "../component/Hero.jsx";
import LogIn from "../component/LogIn.jsx";
import ModalRestaurarContraseña from "../component/ModalRestaurarContraseña.jsx"
import ModalContact from "../component/ModalContact.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
				<Hero />
			<div className="mt-5">
				<Containercardshome />
				<Gallery />
				<ModalImages />
				<ModalContact />
				<LogIn />
				<ModalRestaurarContraseña />
			</div>
		</div>
	);
};
