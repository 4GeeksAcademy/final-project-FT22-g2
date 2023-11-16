import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Gallery from "../component/Gallery.jsx";
import Card from "../component/Card.jsx";
import Containercardshome from "../component/Containercardshome.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center mt-5">
			<div>
				<Containercardshome />
				<Gallery />
			</div>
		</div>
	);
};
